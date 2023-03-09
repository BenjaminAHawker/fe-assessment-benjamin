export interface img { 
    src: string;
    alt: string;
};

export interface btn {
    href: string;
    label: string;
};

export interface ICard {
    title: string;
    body: string;
    image?:img;
    button?: btn;
}

