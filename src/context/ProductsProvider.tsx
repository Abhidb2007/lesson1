export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = [
    {
        sku: "item0001",
        name: "widget",
        price: 9.99
    },
    {
        sku: "item0002",
        name: "Premium Widget",
        price: 12.49
    },
    {
        sku: "item0003",
        name: "Deluxe Widget",
        price: 7.75
    }
]
export type UseProductsContextType={ products: ProductType[]}
export default initState;