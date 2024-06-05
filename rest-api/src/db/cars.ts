import { Car } from "../types/types";

const db: {cars: Car[]} = {
    cars: [
        {
            id: "1",
            brand: 'BMW',
            model: 'Serie 3',
            year: 2020,
            price: 30000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696393527/Venta%20de%20autos%20-%20Proyecto/BMW-Serie-2020-4_k06muj.jpg'
        },
        { 
            id: "2",
            brand: 'Audi', 
            model: 'A4', 
            year: 2020, 
            price: 40000, 
            doors: 4, 
            color: 'Negro', 
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696393915/Venta%20de%20autos%20-%20Proyecto/3-5dc5-3263_res2cp.jpg' 
        },
        {
            id: "3",
            brand: 'Ford',
            model: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394158/Venta%20de%20autos%20-%20Proyecto/1533731056728_ze2dxs.jpg' 
        },
        { 
            id: "4",
            brand: 'Audi', 
            model: 'A6', 
            year: 2020, 
            price: 35000, 
            doors: 4, 
            color: 'Negro', 
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394352/Venta%20de%20autos%20-%20Proyecto/z28242415Q_Audi-A6-50-TFSI-e-quattro-S-tronic_pvcx8e.jpg' 
        },
        {
            id: "5",
            brand: 'BMW',
            model: 'Serie 5',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Rojo',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394949/Venta%20de%20autos%20-%20Proyecto/t7gjl-f9ymg_wd9qdr.webp'
        },
        {
            id: "6",
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395084/Venta%20de%20autos%20-%20Proyecto/GAZ_8aa6ce5c52c743049c2cb496b8f728f4_zeyoi9.jpg'
        },
        {
            id: "7",
            brand: 'Chevrolet',
            model: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Rojo',
            transmission: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395343/Venta%20de%20autos%20-%20Proyecto/EXTERIOR-frontSidePilotNear-1677795220108_xlmryg.jpg'
        },
        { 
            id: "8",
            brand: 'Ford', 
            model: 'Mustang', 
            year: 2019, 
            price: 80000, 
            doors: 2, 
            color: 'Rojo', 
            transmission: 'manual' ,
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395437/Venta%20de%20autos%20-%20Proyecto/450_1000_x9c11b.jpg'
        },
        {
            id: "9",
            brand: 'Dodge',
            model: 'Challenger',
            year: 2020,
            price: 40000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395518/Venta%20de%20autos%20-%20Proyecto/D_NQ_NP_882118-MLM71558535320_092023-O_uurxha.webp'
        },
        { 
            id: "10",
            brand: 'Audi', 
            model: 'A3', 
            year: 2017, 
            price: 55000, 
            doors: 2, 
            color: 'Negro', 
            transmission: 'manual' ,
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395626/Venta%20de%20autos%20-%20Proyecto/D_NQ_NP_892037-MLM71080004851_082023-O_rz1q8h.webp'
        },
        {
            id: "11",
            brand: 'Dodge',
            model: 'Challenger',
            year: 2020,
            price: 25000,
            doors: 2,
            color: 'Rojo',
            transmission: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396387/Venta%20de%20autos%20-%20Proyecto/dg020_090clbk1nih9fdssm02bjaiogeg52cr-760x507_h2cy5d.jpg'
        },
        {
            id: "12",
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Azul',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396454/Venta%20de%20autos%20-%20Proyecto/Mercedes-Clase-C-2018-1-830x460_lvzkxq.jpg'
        },
        {
            id: "13",
            brand: 'BMW',
            model: 'Serie 5',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1717428518/Venta%20de%20autos%20-%20Proyecto/bmw-serie-5-479c_f2nuuc_ubycxf.jpg'
        },
        { 
            id: "14",
            brand: 'Ford', 
            model: 'Mustang', 
            year: 2017, 
            price: 60000, 
            doors: 2, 
            color: 'Negro', 
            transmission: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396674/Venta%20de%20autos%20-%20Proyecto/HD-wallpaper-ford-mustang-sports-cars-black-mustang-tuning-forgeline-gs1r-ford_ksmcxe.jpg' 
        },
        {
            id: "15",
            brand: 'Dodge',
            model: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Azul',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396744/Venta%20de%20autos%20-%20Proyecto/desktop-wallpaper-dodge-challenger-_-for-ultra-tv_megtve.jpg'
        },
        {
            id: "16",
            brand: 'BMW',
            model: 'Serie 3',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396800/Venta%20de%20autos%20-%20Proyecto/serie-3-bmw-318i-sport-line-2018-exterior-frontsidepilotnear-16268048837496_hsa7qm.jpg'
        },
        {
            id: "17",
            brand: 'BMW',
            model: 'Serie 5',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Negro',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396883/Venta%20de%20autos%20-%20Proyecto/bmw-serie-5-dark-shadow-edition-1609432185_gxotn7.jpg'
        },
        {
            id: "18",
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396952/Venta%20de%20autos%20-%20Proyecto/EXTERIOR-frontSidePilotNear-1662576244725_bglkjq.jpg'
        },
        { 
            id: "19",
            brand: 'Audi', 
            model: 'A4', 
            year: 2016, 
            price: 30000, 
            doors: 4, 
            color: 'Azul', 
            transmission: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696397043/Venta%20de%20autos%20-%20Proyecto/HD-wallpaper-2016-audi-a4-2-tfsi-quattro-ara-blue-crystal-effect-front-car_txikm7.jpg' 
        }
    ]
}

export default db;