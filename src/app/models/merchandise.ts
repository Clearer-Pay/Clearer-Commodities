export interface IMerchandiseImage {
    fileName: string;
    base64: string;
}

export interface IMerchandiseVariant {
    name: string;
    value: string ; 
}

export interface IMerchandise {
    productName: string;
    category: string;
    subcategory: string;
    description: string;
    images: IMerchandiseImage[];
    variants: IMerchandiseVariant[];
}

export interface FileData {
    name: string;
    file: File;
}