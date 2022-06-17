import * as React from 'react';

import Layout from '@/components/layout/Layout';


export default function HomePage() {
  return (
    <Layout title='Home'>

      <main>
        <section >
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4 logoText'>
              CoinFlip
            </h1>

          </div>
        </section>
      </main>
    </Layout>
  );
}