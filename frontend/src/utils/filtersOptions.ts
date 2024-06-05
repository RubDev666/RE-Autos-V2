import { Car } from "@/types";

export let brands: string[] = [];
export let years: number[] = [];
export let doors: number[] = [];
export let transmissions: string[] = [];
export let colors: string[] = [];

export function extractData(cars: Car[] | []) {
    if (!cars || cars.length === 0) return;

    let b: string[] = [];
    let y: number[] = [];
    let d: number[] = [];
    let t: string[] = [];
    let c: string[] = [];

    for (let car of cars) {
        b.push(car.brand);
        y.push(car.year);
        d.push(car.doors);
        t.push(car.transmission);
        c.push(car.color);
    }

    //To iterate the "sets" you have to put in"tsconfig" > "compilerOptions" > "target": "es6"

    const bransUnique = new Set(b);
    brands = [...bransUnique];

    y.sort((a: number, b: number) => b - a); //order the year from highest to lowest

    const yearUnique = new Set(y);
    years = [...yearUnique];

    const doorsUnique = new Set(d);
    doors = [...doorsUnique];

    const transmissionUnique = new Set(t);
    transmissions = [...transmissionUnique];

    const colorsUnique = new Set(c);
    colors = [...colorsUnique];
}
