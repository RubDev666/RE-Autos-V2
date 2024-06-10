import { apiUrl } from "@/utils/globalVariables";
import { Car } from "@/types";
//import { NextResponse } from "next/server";

export async function GET () {
    if(!apiUrl) return;

    const res: {cars: Car[]} = await fetch(apiUrl).then((res) => res.json());

    return Response.json(res);
}
