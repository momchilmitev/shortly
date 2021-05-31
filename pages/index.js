import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Shortly</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
    </div>
  );
}
