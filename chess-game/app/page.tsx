// pages/index.tsx

import Head from 'next/head';
import ChessGame from '../components/ChessGame';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Chess Game</title>
        <meta name="description" content="A chess game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <ChessGame />
      </main>
    </>
  );
}