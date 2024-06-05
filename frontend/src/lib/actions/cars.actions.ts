"use server";

import { Car } from "@/types";

const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API;

export async function getCars() {
    if (!apiUrl) return;

    try {
        const res: {cars: Car[]} = await fetch(apiUrl).then((res) => res.json());

        return { cars: res ? res.cars : [] };
    } catch (error) {
        console.log(error);
    }
}

export async function getCar(id: string) {
    if (!apiUrl) return;

    try {
        const res: Car = await fetch(apiUrl + '/' + id).then((res) => res.json());

        return {car: res};
    } catch (error) {
        console.log(error);
    }
}
