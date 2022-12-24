import Head from 'next/head';

export default function Products() {
  const produtos = [
    {
      name: 'Óculos',
      description: 'Solar',
      Price: 69.99,
    },
    {
      name: 'Sunga',
      description: 'Azul',
      Price: 69.99,
    },
    {
      name: 'Boné',
      description: 'Nike',
      Price: 69.99,
    },
  ];
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.name}>
            <p>{produto.name}</p>
            <p>{produto.description}</p>
            <p>{produto.Price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
