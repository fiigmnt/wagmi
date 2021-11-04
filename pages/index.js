import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const color = Math.random() > 0.5 ? 'dark' : 'light';
  return (
    <>
      <Head>
        <title>WAGMI</title>
        <meta name="description" content="Wagmi" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{
          color: color === 'light' ? '#201e1f' : '#f0efeb',
          backgroundColor: color === 'light' ? '#f0efeb' : '#201e1f',
        }}
      >
        <div className={styles.title}>
          <h1>WAGMI</h1>
        </div>
      </main>
    </>
  );
}
