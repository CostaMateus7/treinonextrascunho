import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </>
  );
}
