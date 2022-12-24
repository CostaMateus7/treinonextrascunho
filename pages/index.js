import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Hello World!</h1>
        <video width="600px" controls>
          <source src="Makes/vi.mp4" type="video/mp4" />
          <track src="captions_pt.vtt" kind="captions" srcLang="pt" label="english_captions" />
        </video>
        <Image
          src="/Images/profile.jpeg"
          width={300}
          height={350}
          alt="Foto de perfil"
        />
      </main>
    </>
  );
}
