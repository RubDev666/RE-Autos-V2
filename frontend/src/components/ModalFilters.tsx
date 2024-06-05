'use client';

import { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp,faTimes } from '@fortawesome/free-solid-svg-icons';

import { Options, ModalProps, KeysParams } from '@/types';
import { keysParams } from '@/utils/globalVariables';
import { brands, years, doors, transmissions, colors } from '@/utils/filtersOptions';

export default function ModalFilters({ setModalFilters, createURL, pathname, params, router, setTags, tagsParams }: ModalProps) {
    const [brandAccor, setBrand] = useState(false);
    const [yearAccor, setYear] = useState(false);
    const [colorAccor, setColor] = useState(false);
    const [doorsAccor, setDoor] = useState(false);
    const [transmissionsAccor, setTransmission] = useState(false);

    const getClass = (key: KeysParams, value: string): string => {
        const p = params.get(key);

        if (!p || !p.includes(value)) return 'btn-light';

        return 'btn-dark';
    }

    const btnCreateQuery = (e: React.MouseEvent<HTMLButtonElement>, key: KeysParams) => {
        const t = e.target as HTMLButtonElement;
        const text = t.innerText.toLowerCase();

        const p = params.get(key);

        let tag = tagsParams;

        if (!p) {
            tag.push({key, value: text});
            setTags(tag);

            router.push(pathname + '?' + createURL(key, text));

            return;
        }

        if (!p.includes(text)) {           
            tag.push({key, value: text});
            setTags(tag);

            router.push(pathname + '?' + createURL(key, p + '-' + text));
        }
    }

    return (
        <div className="modal-container">
            <div className="filters-mobile">
                <div className="actions items-between">
                    <button className="btn-close items-center pointer"><FontAwesomeIcon icon={faTimes} onClick={() => setModalFilters(false)} /></button>

                    <p className="t-family">Filtros</p>

                    <Link href='/seminuevos' className="color-4 p-family">Limpiar</Link>                    
                </div>

                <div className="filters p-family">
                    {keysParams.map((key) => {
                        const obj: Options = {
                            brand: {
                                bool: brandAccor,
                                set: setBrand,
                                keyUI: 'Marca',
                                options: brands
                            },
                            year: {
                                bool: yearAccor,
                                set: setYear,
                                keyUI: 'Año',
                                options: years
                            },
                            doors: {
                                bool: doorsAccor,
                                set: setDoor,
                                keyUI: 'Puertas',
                                options: doors
                            },
                            transmission: {
                                bool: transmissionsAccor,
                                set: setTransmission,
                                keyUI: 'Transmision',
                                options: transmissions
                            },
                            color: {
                                bool: colorAccor,
                                set: setColor,
                                keyUI: 'Color',
                                options: colors
                            }
                        }

                        return (
                            <div className="accordion-container border-bottom" key={key}>
                                <button
                                    className={`btn-action pointer ${obj[key].bool ? 'color-1' : 'color-4'}`}
                                    onClick={() => obj[key].set(!obj[key].bool)}
                                >
                                    {obj[key].keyUI} <FontAwesomeIcon icon={obj[key].bool? faAngleUp : faAngleDown} className="icon-filter" />
                                </button>

                                {obj[key].bool && (
                                    <div className="options">
                                        {obj[key].options.map((option: string | number) => (
                                            <button
                                                className={`capitalize ${getClass(key, option.toString().toLowerCase())}`}
                                                key={option}
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnCreateQuery(e, key)}
                                            >
                                                {option.toString()}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <button
                    className="btn-show p-family capitalize"
                    onClick={() => setModalFilters(false)}
                >
                    Mostrar resultados
                </button>
            </div>
        </div>
    )
}
