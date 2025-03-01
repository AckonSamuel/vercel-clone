import React from 'react';
import Head from 'next/head';
import HomeContent from '@/components/HomeContent/HomeContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vercel: Build and deploy the best web experiences with the Frontend Cloud</title>
        <meta 
          name="description" 
          content="Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex-1">
        <div className="stack_stack__iZkUS stack geist-soft-reset grid_page__PyNa0 root_root__yf74f stack_padding__ox8JS">
          <HomeContent />
        </div>
      </main>
    </>
  );
}
