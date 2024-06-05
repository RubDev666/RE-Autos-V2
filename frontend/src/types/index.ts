import { Dispatch, SetStateAction } from "react";
import { ReadonlyURLSearchParams } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type Car = {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    doors: number;
    color: string;
    transmission: string;
    urlImage: string;
}

export type KeysParams = 'brand' | 'year' | 'doors' | 'transmission' | 'color';

export type TagParam = {
    key: KeysParams | 'keywords';
    value: string;
}

export type Options = {
    [keyFil: string]: {
        bool: boolean,
        set: Dispatch<SetStateAction<boolean>>,
        keyUI: string,
        options: string[] | number[]
    }
}

export type ModalProps = {
    setModalFilters: (value: SetStateAction<boolean>) => void;
    createURL: (name: string, value: string) => string;
    pathname: string;
    params: ReadonlyURLSearchParams;
    router: AppRouterInstance;
    tagsParams: TagParam[];
    setTags: Dispatch<SetStateAction<TagParam[]>>;
}

export type SearchFiltersProps = {
    cars: Car[];
    openMenu: boolean;
    currentOption: string;
    setCurrentOption: Dispatch<SetStateAction<string>>;
}
