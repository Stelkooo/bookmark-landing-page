import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home() {
  return <div className={rubik.className} />;
}
