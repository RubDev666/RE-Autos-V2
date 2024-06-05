'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { register } from 'swiper/element/bundle';
register();

import { Spinner } from '@/components';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            //original code
            //'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,

            'swiper-container': { 
                children: Element[]; 
                speed: string; 
                "slides-per-view": string; 
                pagination: string; 
                navigation: string; 
                onMouseEnter: () => void; 
                onMouseLeave: () => void; 
            },
            'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        }
    }
}

export default function Slider() {
    //number of elements to show in the slider
    const [sliderView, setSliderView] = useState('1'); 
    const [navBtn, setNavBtn] = useState('false');
    const [slider, setSlider] = useState(false);

    //const swiperElRef = useRef(null);

    useEffect(() => {
        setSlider(true);

        //first load
        if (innerWidth < 768) {
            setSliderView('1');
        } else if (innerWidth >= 768 && innerWidth <= 919) {
            setSliderView('2');
        } else if (innerWidth >= 920) {
            setSliderView('3');
        }

        //listening for screen size changes
        addEventListener("resize", () => {
            setNavBtn('false');

            if (innerWidth < 768) {
                setSliderView('1');
            } else if (innerWidth >= 768 && innerWidth <= 919) {
                setSliderView('2');
            } else if (innerWidth >= 920) {
                setSliderView('3');
            }
        });
    }, [])

    return (
        <section id="slider-main">
            <h2 className='t-family'>7 razones para comprar un auto en <span className="italic">RE AUTOS</span></h2>

            {!slider && <Spinner />}

            {slider && (
                <swiper-container
                    //ref={swiperElRef}
                    speed="700"
                    slides-per-view={sliderView}
                    pagination={sliderView === '1' ? "true" : "false"}
                    navigation={navBtn}
                    onMouseEnter={() => setNavBtn(sliderView === '2' || sliderView === '3' ? 'true' : 'false')}
                    onMouseLeave={() => setNavBtn('false')}
                >
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-1.webp' width={150} height={100} alt='img-main' priority={true} />

                            <div className='slider-text'>
                                <h3 className='t-family'>Te damos 3 meses de garantía limitada</h3>
                                <p className='p-family'>Contrata <span className="italic">RE AUTOS</span> Total para recibir mayor cobertura y beneficios adicionales por 12 meses.</p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-2.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Certificamos todos nuestros auto</h3>
                                <p className='p-family'>Revisamos mecánica, estética y documentación para que te sientas seguro en tu <span className="italic">RE AUTOS</span></p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-3.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Atención Mecánica Especializada</h3>
                                <p className='p-family'>Con nuestros servicios posventa extiendes la vida de tu auto</p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-4.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Ofrecemos planes de pago a medida</h3>
                                <p className='p-family'>Preaprobamos tu plan de pagos en menos de 2 minutos.</p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-5.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Vive la experiencia <span className="italic">RE AUTOS</span></h3>
                                <p className='p-family'>Visita nuestras sedes con miles de autos para escoger.</p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-6.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Pruébalo por 7 dias o hasta 300 km</h3>
                                <p className='p-family'>¿No te convence? No te preocupes, cámbialo por otro auto.</p>
                            </div>
                        </article>
                    </swiper-slide>

                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-7.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='t-family'>Tu auto en tu bolsillo</h3>
                                <p className='p-family'>Da seguimiento a coberturas, mantenimiento, verificacion y más, desde la app <span className="italic">RE AUTOS</span></p>
                            </div>
                        </article>
                    </swiper-slide>
                </swiper-container>
            )}

            <Link href='/seminuevos' className='btn btn-secundario p-family'>Comprar un auto</Link>
        </section>
    )
}