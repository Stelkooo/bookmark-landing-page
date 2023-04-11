import { Rubik } from 'next/font/google';

import Header from '@/sections/header/header.component';
import Main from '@/sections/main/main.component';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${rubik.className} grid gap-y-10 overflow-hidden`}>
      <Header />
      <Main />
    </div>
  );
}
