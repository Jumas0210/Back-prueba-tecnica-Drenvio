export interface Iproducts {
    name: string;
    price: number;
    category: string;
    stock: number;
    description?: string;
    brand: string;
    sku?: string;
    tags: string[];
}