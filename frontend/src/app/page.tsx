'use client';

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { Slider } from "@/components";

type Headquarter = {name: string, addres: string}

const headquarters: Headquarter[] = [
    {
        name: "RE AUTOS CDMX",
        addres: "Carr Amomolulco Ocoyoacac, Estado de México, 52740."
    },
    {
        name: "RE AUTOS Monterrey",
        addres: "AV Sin nombre 9087, Guadalupe, Monterrey, 52740"
    },
    {
        name: "RE AUTOS Mérida",
        addres: "Periferico Norte, No.73, Francisco de Montejo, 52740."
    },
    {
        name: "RE AUTOS Guadalajara",
        addres: "Cristobal Colón 6013, San Pedro Tlaquepaque, Jalisco, 45601."
    },
]

export default function Home() {
    return (
        <>
            <main className='relative'>
                <div className="bg-skew"></div>

                <div className="main-container relative all-center">
                    <Image src='/images/main-img.png' width={600} height={337} alt='main-img' className='car-main' priority />

                    <div className="main-info-container">
                        <h1 className='t-family'>Transformamos la compra y venta de autos seminuevos</h1>

                        <Link href='/seminuevos' className='p-family btn'>Comprar un auto</Link>

                        <div className="link">
                            <Link href='/' className='btn-link relative p-family'>Cambia o vende tu auto ahora <FontAwesomeIcon icon={faAngleRight} className='angle-right' /></Link>
                        </div>
                    </div>
                </div>
            </main>

            <Slider />

            <section className="gray-section section">
                <div>
                    <h3 className='t-family'>Cambia tu auto con más beneficios</h3>
                    <p className="p-family border_bottom">Te damos un bono extra.</p>
                    <p className="p-family border_bottom">Plan de Pagos Pre aprobado*</p>
                    <p className="p-family line_height">No te quedes sin tu auto, los intercambiamos en menos de 24hrs.</p>

                    <button className="p-family">Vende tu auto</button>
                </div>

                <Image src='/images/seccion-1.png' width={750} height={772} alt='img-main' priority={true} />
            </section>

            <section id="plan" className="white-section section">
                <div>
                    <h3 className='t-family'>Aprobamos tu plan de pagos en 2 minutos</h3>
                    <p className={`p-family`}>Tenemos planes personalizados para todos los perfiles.</p>

                    <button className="p-family">Compra auto a meses</button>
                </div>

                <Image src='/images/seccion-2-mobile.webp' width={750} height={772} alt='img-main' priority={true} className="img_mobile" />

                <Image src='/images/seccion-2-mobile.webp' width={750} height={772} alt='img-main' priority={true} className="img_normal" />
            </section>

            <section id="disfruta_tu_auto" className="gray-section section">
                <div>
                    <h3 className='t-family'>Disfruta tu auto, nosotros lo cuidamos</h3>
                    <p className={`p-family`}>Damos servicios a cualquier auto: mantenimiento, verificación y más</p>

                    <button className="p-family">Conoce los servicios</button>
                </div>

                <Image src='/images/seccion-3.png' width={750} height={772} alt='img-main' priority={true} />
            </section>

            <section id="headquarters" className="white-section all-center section">
                <h3 className="t-family">¡Visita nuestras sedes y conócenos!</h3>

                <div className="headquarters-container p-family">
                    {headquarters.map((headquarter: Headquarter) => (
                        <div className="headquarter" key={headquarter.name}>
                            <FontAwesomeIcon icon={faLocationDot} className="icon color-1" />

                            <div className="addres-container">
                                <p className="name">{headquarter.name}</p>
                                <p className="color-4">{headquarter.addres}</p>
                            </div>

                            <button>Ver detalles</button>
                        </div>
                    ))}
                </div>

                <button className='p-family'>Conoce nuestras sedes</button>
            </section>
        </>
    );
}
