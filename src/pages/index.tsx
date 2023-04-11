import { Rubik } from 'next/font/google';

import Header from '@/sections/header/header.component';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={rubik.className}>
      <Header />
    </div>
  );
}
