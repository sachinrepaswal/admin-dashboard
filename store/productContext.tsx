'use client';

import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const sampleProducts = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'High-end smartphone with advanced features',
    price: 999
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'Powerful laptop for work and entertainment',
    price: 1499
  },
  {
    id: 3,
    name: 'Headphones',
    description: 'Wireless headphones with noise-cancellation',
    price: 199
  }
];

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState(sampleProducts);
  const updateProducts = (newProducts: any) => {
    setProducts(newProducts);
  };

   const addProduct = (newProduct:any) => {
     setProducts([...products, newProduct]);
   };

    const editProduct = (productId:any, updatedProduct:any) => {
      const updatedProducts = products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      );
      setProducts(updatedProducts);
    };

    const deleteProduct = (productId) => {
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    };


  return (
    <ProductContext.Provider
      value={{ products, addProduct, editProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
