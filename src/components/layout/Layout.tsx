import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';

interface Props {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  // Put Header or Footer Here
  return (
    <div className='container mx-auto'>
      <Seo templateTitle={title} />

      <Header />
      {children}
      <Footer />
    </div>
  )
}
