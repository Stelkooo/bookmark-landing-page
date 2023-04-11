import Button from '@/components/button/button.component';
import Image from 'next/image';

import Hero from 'public/images/illustration-hero.svg';

export default function Main() {
  return (
    <main className="mx-8">
      <div className="flex flex-col gap-24">
        <div className="relative before:absolute before:left-16 before:top-14 before:-z-10 before:h-[203px] before:w-[577px] before:rounded-full before:bg-blue">
          <Image src={Hero} alt="" />
        </div>
        <div className="grid gap-y-8">
          <div className="grid gap-y-4">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="flex gap-[14px]">
            <Button color="blue">Get it in Chrome</Button>
            <Button color="white">Get it on Firefox</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
