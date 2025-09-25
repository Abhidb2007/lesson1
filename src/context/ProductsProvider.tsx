import React, { createContext, useState, useEffect, ReactNode, ReactElement } from "react";



export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  { sku: "item0001", name: "widget", price: 9.99 },
  { sku: "item0002", name: "Premium Widget", price: 12.49 },
  { sku: "item0003", name: "Deluxe Widget", price: 7.75 },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactNode };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      try {
        const res = await fetch("http://localhost:3500/products");
        const data = await res.json();
        return data;
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
        return [];
      }
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
