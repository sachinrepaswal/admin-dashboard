"use client";
import { useState } from "react";
import { useProductContext } from "../../store/productContext";
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';


export const page = () => {
    const { products, deleteProduct } = useProductContext();
    const [editingProduct, setEditingProduct] = useState<any>(null);

     const handleEditClick = (product:any) => {
       setEditingProduct(product);
     };

     const handleUpdateProduct = () => {
       setEditingProduct(null);
     };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Product List</Title>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {products.map((product) => (
          <>
            <Card key={product.id}>
              <Title>{product.name}</Title>
              <Metric>${product.price}</Metric>
              <Text>{product.description}</Text>
              <button
                onClick={() => deleteProduct(product.id)}
                type="button"
                className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-blue-500 px-4 py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-blue-600 dark:bg-blue-500 dark:text-tremor-brand-inverted dark:shadow-dark-tremor-input hover:dark:bg-blue-600"
                tabIndex={0}
              >
                Add
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                type="button"
                className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-green-500 px-4 py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-green-600 dark:bg-green-500 dark:text-tremor-brand-inverted dark:shadow-dark-tremor-input hover:dark:bg-green-600"
                tabIndex={0}
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                type="button"
                className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-red-500 px-4 py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-red-600 dark:bg-red-500 dark:text-tremor-brand-inverted dark:shadow-dark-tremor-input hover:dark:bg-red-600"
                tabIndex={0}
              >
                Delete
              </button>
            </Card>
          </>
        ))}
      </Grid>
    </main>
  );
}

export default page;
