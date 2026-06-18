export type THeader={
    id: number | string;
    name: string;
}

export type TDesignItem={
    id?: number | string;
    image: string;
    status: string;
    subtitle: string;
    title: string;
}
type Links={
    name: string,
    href: string,
}

export type TfooterMenu={
    id: number | string;
    title:string,
    links: Links[],
}

export type TSocial={
    id: number | string;
    icon: string;
    href: string;
}


