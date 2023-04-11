import Image from 'next/image';
import Link from 'next/link';

import Close from 'public/images/icon-close.svg';
import Logo from 'public/images/logo-bookmark.svg';
import Facebook from 'public/images/icon-facebook.svg';
import Twitter from 'public/images/icon-twitter.svg';

type Props = {
  menuToggle: () => void;
};

export default function MobileMenu({ menuToggle }: Props) {
  return (
    <div className="fixed inset-0 flex h-screen w-screen flex-col gap-10 bg-navy px-8 py-10 opacity-95">
      <div className="flex items-center justify-between">
        <Image src={Logo} alt="Bookmark Logo" className="invert" />
        <button type="button" onClick={() => menuToggle()}>
          <Image
            src={Close}
            alt="Hamburger Menu, click here to close navigation menu"
          />
        </button>
      </div>
      <nav className="text-xl text-white">
        <ul className="mb-6 text-center font-normal uppercase tracking-widest">
          <Link href="#features">
            <li className="border-y border-y-grey py-6">Features</li>
          </Link>
          <Link href="#pricing">
            <li className="border-b border-y-grey py-6">Pricing</li>
          </Link>
          <Link href="#contact">
            <li className="border-b border-y-grey py-6">Contact</li>
          </Link>
        </ul>
        <button
          type="button"
          className="w-full rounded-md border-2 border-white py-4 font-medium uppercase tracking-widest"
        >
          Login
        </button>
      </nav>
      <div className="mt-auto flex gap-10 self-center">
        <Link href="facebook.com">
          <Image src={Facebook} alt="Link to Bookmark's Facebook Page" />
        </Link>
        <Link href="twitter.com">
          <Image src={Twitter} alt="Link to Bookmark's Twitter Page" />
        </Link>
      </div>
    </div>
  );
}
