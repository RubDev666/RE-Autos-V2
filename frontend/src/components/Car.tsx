'use client';

import Image from "next/image";

import { Car as CarTypes } from "@/types";

export default function Car({ car }: { car: CarTypes }) {
    const { brand, model, doors, year, transmission, urlImage, price } = car;

    return (
        <div className="car pointer">
            <div className="img-container">
                <Image src={urlImage} alt="car" width={600} height={310} priority />
            </div>

            <div className="car-info">
                <p className="t-family">{brand} - {model}</p>
                <p className="p-family capitalize color-4">{year} • {transmission} • {doors} Puertas</p>
            </div>

            <div className="car-price">
                <p className="t-family">${price}</p>
                <p className="p-family capitalize color-1">Desde $3,000/mes*</p>
            </div>
        </div>
    )
}
