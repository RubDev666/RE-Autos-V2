import { Error } from "@/components";

export const metadata = {
    title: 'RE Autos | No encontrado',
    description: 'Pagina de no encontrado',
}

export default function  NotFound() {
    return(
        <Error title="Lo sentimos..." message="Página no encontrada. Tal vez quieras volver al inicio." />
    )
}
