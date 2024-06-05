'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import { SearchFiltersCont } from "@/components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faBars,
    faBolt,
    faCar,
    faComment,
    faDollarSign,
    faQuestionCircle,
    faTag,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Car } from "@/types";

export default function Header({ data }: {data: {cars: Car[]} | undefined}) {
    const [openMenu, setOpenMenu] = useState(false); //mobile
    const [usAccordion, setUsAccordion] = useState(false);
    const [helpAccordion, setHelpAccordion] = useState(false);
    const [currentOption, setCurrentOption] = useState<string>('');

    const pathname = usePathname();

    useEffect(() => {
        addEventListener('resize', () => {
            if (window.innerWidth >= 1024) resetMenuMobile();
        })
    }, [])

    useEffect(() => {
        resetMenuMobile();
    }, [pathname])

    useEffect(() => {
        const body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLBodyElement>;
        const header = document.getElementsByTagName('header') as HTMLCollectionOf<HTMLElement>;

        if (openMenu) {
            body[0].style.overflowY = 'hidden';

            header[0].style.position = 'fixed';
            header[0].style.width = '100%';
            header[0].style.top = '0';
            header[0].style.overflowY = 'auto';
            header[0].style.height = '100vh';
        } else {
            body[0].style.overflowY = 'auto';

            header[0].style.position = 'inherit';
            header[0].style.width = 'auto';
            header[0].style.height = 'auto';
            header[0].style.overflowY = 'visible';

            //always close accordions when closing the menu
            if(!openMenu) resetMenuMobile();
        }
    }, [openMenu]);

    const resetMenuMobile = () => {
        setOpenMenu(false);
        setHelpAccordion(false);
        setUsAccordion(false);
        setCurrentOption('');
    }

    return (
        <header className="relative">
            <div className="logo-navbar-container">
                <div className={`logo-container items-between ${openMenu ? 'active' : ''}`}>
                    <Link
                        className='logo t-family'
                        href='/'
                    >
                        RE <FontAwesomeIcon icon={faBolt} className='icon' />Autos
                    </Link>

                    {!openMenu && <FontAwesomeIcon icon={faBars} className='icons-menu pointer' onClick={() => setOpenMenu(true)} />}

                    {openMenu && <FontAwesomeIcon icon={faTimes} className='icons-menu pointer' onClick={() => setOpenMenu(false)} />}
                </div>

                <nav className={`${openMenu ? 'show' : ''} ${pathname === '/seminuevos' ? 'mobile-pre-owned' : 'mobile'}`}>
                    <div className='login-container'>
                        <p className='t-family'>Te damos la bienvenida</p>
                        <p className='p-family'>Crea una cuenta o inicia sesión para tener el control de tu compra, venta o financiamiento.</p>

                        <button className='p-family w-full'>Ingresar</button>
                    </div>

                    <div className='links-icons border-bottom p-family'>
                        <Link href='/'>
                            <span><FontAwesomeIcon icon={faDollarSign} className='icon' /></span> Paga a meses
                        </Link>
                        <Link href='/seminuevos'>
                            <span><FontAwesomeIcon icon={faCar} className='icon' /></span> Compra un auto
                        </Link>
                        <Link href='/'>
                            <span><FontAwesomeIcon icon={faTag} className='icon' /></span> Vende tu auto
                        </Link>
                    </div>

                    <div className="links-accordion border-bottom p-family">
                        <Link href='/'>Cuida tu auto</Link>

                        <div className="us-accordion">
                            <button
                                className={`pointer w-full btn-filter ${usAccordion ? 'color-1' : 'color-4'}`}
                                onClick={() => setUsAccordion(!usAccordion)}
                            >
                                Nosotros <FontAwesomeIcon icon={usAccordion ? faAngleUp : faAngleDown} className='color-1 icon-filter' />
                            </button>

                            {usAccordion && (
                                <div className='accordion'>
                                    <Link href='/'>Sedes</Link>
                                    <Link href='/'>Guía de precios</Link>
                                    <Link href='/'>Testimoniales</Link>
                                    <Link href='/'>Blog</Link>
                                </div>
                            )}
                        </div>

                        <div className="help-accordion">
                            <button
                                className={`pointer w-full btn-filter ${helpAccordion ? 'color-1' : 'color-4'}`}
                                onClick={() => setHelpAccordion(!helpAccordion)}
                            >
                                Ayuda <FontAwesomeIcon icon={helpAccordion ? faAngleUp : faAngleDown} className='color-1 icon-filter' />
                            </button>

                            {helpAccordion && (
                                <div className='accordion'>
                                    <Link href='/' className='capitalize'>
                                        <FontAwesomeIcon icon={faQuestionCircle} className='icon' /> Preguntas frecuentes
                                    </Link>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faComment} className='icon' /> Contacto
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            {(data && data.cars) && (
                <SearchFiltersCont 
                    cars={data.cars}
                    openMenu={openMenu}
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                />
            ) }
        </header>
    )
}

