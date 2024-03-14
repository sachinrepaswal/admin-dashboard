"use client";

import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import { useProductContext } from '../store/productContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

    const { products } = useProductContext();

  const search = searchParams.q ?? '';

     const sproducts = products.filter((product) =>
       product.name.toLowerCase().includes(search.toLowerCase())
     );

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from the database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable products={sproducts} />
      </Card>
    </main>
  );
}
