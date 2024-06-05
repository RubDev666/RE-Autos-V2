"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { getCars } from "@/lib/actions/cars.actions";
import { Car as CarComponent, ModalFilters, Spinner, Error } from "@/components";
import { extractData } from "@/utils/filtersOptions";
import { TagParam, Car, KeysParams } from "@/types";
import { keysParams } from "@/utils/globalVariables";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faFilter,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const orderOptions = ['Mayor precio', 'Menor precio', 'Más antiguos', 'Más recientes'];

export default function PreOwned() {
    //to extract information for user interactivity
    const [originalData, setData] = useState<Car[] | []>([]);

    //the filtered data will be saved here
    const [cars, setCars] = useState<Car[] | []>([]);

    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(false);
    const [orderOption, setOrderOption] = useState<string>('');
    const [showFilters, setShowFilters] = useState(true);
    const [modalFilters, setModalFilters] = useState(false);
    const [tagsParams, setTags] = useState<TagParam[]>([])

    const pathname = usePathname();
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        async function getData() {
            const data = await getCars();

            if(!data) return setLoading(false);

            setData(data.cars);
            extractData(data.cars);
        }

        getData();

        if (window.innerWidth >= 1024) {
            setModalFilters(true);
        } else {
            setShowFilters(true);
        }

        addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                setModalFilters(true);
            } else {
                setModalFilters(false);
                setShowFilters(true);
            }
        })
    }, [])

    //only first load
    useEffect(() => {
        if (originalData.length > 0) filterCars();
    }, [originalData])

    useEffect(() => {
        getParams();

        //don't run on first load
        if (!loading) filterCars();

        if (!params.get('order')) setOrderOption('');
    }, [params])

    useEffect(() => {
        const body = document.getElementsByTagName('body');

        if (modalFilters && window.innerWidth <= 1023) {
            body[0].style.overflowY = 'hidden';
        } else {
            body[0].style.overflowY = 'auto';
        }

    }, [modalFilters])

    useEffect(() => {
        const keyOrders = params.get('order');

        if (keyOrders && cars.length > 0) {
            const newarr = orderF(cars, keyOrders);

            setCars(newarr);
        }
    }, [orderOption])

    const filterCars = () => {
        let allFilters = originalData;

        const keywords = params.get('keywords');
        const order = params.get('order');

        if (keywords) {
            const extract = keywords.split('-');

            let preFilter: Car[] = [];
            let idCars: string[] = [];

            //to access the car properties without validating
            type CarProperties = KeysParams | 'model';
            const carProperties: CarProperties[] = [...keysParams, 'model'];

            extract.forEach((e: string) => {
                for (let i = 0; i < carProperties.length; i++) {
                    for (let car of allFilters) {
                        if (car[carProperties[i]].toString().toLowerCase().includes(e.toLowerCase()) && !idCars.includes(car.id)) {
                            preFilter.push(car);
                            idCars.push(car.id);
                        }
                    }
                }
            })

            allFilters = preFilter;
        }

        keysParams.forEach((key: KeysParams) => {
            const values = params.get(key);

            if (values) {
                if (values.includes('-')) {
                    multipleValues(key, values);
                } else {
                    uniqueValue(key, values);
                }
            }
        });

        if (order) {
            const newArr = orderF(allFilters, order);

            allFilters = newArr;
        };

        setCars(allFilters);

        setLoading(false);

        function uniqueValue(keyType: KeysParams, value: string) {
            const newFilters = allFilters.filter((car: Car) => car[keyType].toString().toLowerCase() === value);

            allFilters = newFilters;
        }

        function multipleValues(keyType: KeysParams, values: string) {
            const paramValues = values.split('-');

            let preFilter: Car[] = [];

            for (let value of paramValues) {
                const newFilters = allFilters.filter((car: Car) => car[keyType].toString().toLowerCase() === value);

                for (let item of newFilters) {
                    preFilter.push(item);
                }
            }

            allFilters = preFilter;
        }
    }

    const orderF = (currentArr: Car[], option: string): Car[] => {
        let newOrder = currentArr;

        if (option === 'Mayor precio') {
            newOrder.sort((x, y) => y.price - x.price);
        } else if (option === 'Menor precio') {
            newOrder.sort((x, y) => x.price - y.price);
        } else if (option === 'Más antiguos') {
            newOrder.sort((x, y) => x.year - y.year);
        } else if (option === 'Más recientes') {
            newOrder.sort((x, y) => y.year - x.year);
        }

        return newOrder;
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const newParams = new URLSearchParams(params);

            //empty spaces in a string are represented with a '+'
            newParams.set(name, value);

            if (name !== 'order') {
                newParams.delete('keywords');
            }

            return newParams.toString();
        },
        [params]
    )

    const btnOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
        const t = e.target as HTMLButtonElement;

        setOrderOption(t.value);
        setOrder(false);

        router.push(pathname + '?' + createQueryString('order', t.value));
    }

    const getParams = () => {
        let newTags: TagParam[] = [];

        const keywords = params.get('keywords');

        //avoid iterating the rest of the parameters if this is active
        if (keywords) {
            const extract = keywords.split('-');

            extract.forEach((e: string) => newTags.push({ key: 'keywords', value: e }));

            setTags(newTags);

            return;
        }

        keysParams.forEach((key: KeysParams) => {
            const values = params.get(key);

            if (values) {
                const extract = values.split('-');

                extract.forEach((e: string) => newTags.push({ key: key, value: e }));
            }
        })

        setTags(newTags);
    }

    const deleteParam = (tag: TagParam) => {
        const url = '/seminuevos';
        const currentP = new URLSearchParams(params);

        const p = params.get(tag.key);

        if (!p) return;

        if (p.includes('-')) {
            let extract = p.split('-').filter((e: string) => e !== tag.value);

            currentP.set(tag.key, extract.join('-'));
        } else {
            currentP.delete(tag.key);
        }

        router.push(url + '?' + currentP.toString());
    }

    return (
        <>
            <div className="preowned-header">
                <div className="results-order-container p-family items-between">
                    <button className="capitalize btn-toggle-filters pointer" onClick={() => setShowFilters(!showFilters)}      >
                        <FontAwesomeIcon icon={faFilter} className="icon" /> {showFilters ? 'ocultar filtros' : 'mostrar filtros'}
                    </button>

                    <Link href='/seminuevos' className="btn-clean color-4">Limpiar</Link>

                    <p className="results color-4">{cars.length} Resultados</p>

                    <div className="order-options-preowned relative">
                        <button className="btn-order" onClick={() => setOrder(!order)}>
                            Ordenar: <span className='selected pointer capitalize all-center color-1'>{orderOption} <FontAwesomeIcon icon={order ? faAngleUp : faAngleDown} className='icon-order color-1' /></span>
                        </button>

                        {order && (
                            <div className="options-container-preowned">
                                {orderOptions.map((option: string) => <button key={option} value={option} onClick={btnOrder} className="pointer">{option}</button>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {loading && <Spinner />}

            {!loading && originalData.length > 0 && (
                <div className={`cars-filters-container relative grid-layout-${showFilters ? 'actived' : 'disabled'}`}>
                    {(showFilters) && (
                        <div className="filters-container">
                            <button className="p-family btn-open pointer" onClick={() => setModalFilters(true)}>
                                + Filtros
                            </button>

                            {modalFilters && (
                                <ModalFilters
                                    setModalFilters={setModalFilters}
                                    createURL={createQueryString}
                                    pathname={pathname}
                                    router={router}
                                    params={params}
                                    setTags={setTags}
                                    tagsParams={tagsParams}
                                />
                            )}
                        </div>
                    )}

                    <div className="cars-remove-container">
                        <div className={`delete-filters-container ${tagsParams.length > 0 ? 'margin-top' : ''}`}>
                            {tagsParams.map((tag: TagParam) => (
                                <button
                                    key={tag.value}
                                    className="p-family all-center"
                                    onClick={() => deleteParam(tag)}
                                >
                                    {tag.value} <FontAwesomeIcon icon={faTimes} className="icon color-1" onClick={() => deleteParam(tag)} />
                                </button>
                            ))}
                        </div>

                        {cars.length > 0 ? (
                            <div className={`cars-container ${showFilters ? 'grid-filters-actived' : 'grid-filters-disabled'}`}>
                                {cars.map((car) => (
                                    <CarComponent car={car} key={car.id} />
                                ))}
                            </div>
                        ) : (
                            <Error title="No encontramos autos relacionados a tu búsqueda." message="Ajusta los filtros y encuentra otras opciones." />
                        )}
                    </div>
                </div>
            )}

            {(!loading && originalData.length === 0) && <Error title="Error inesperado" message="Vuelva a cargar la pagina o intentelo mas tarde." />}
        </>
    )
}
