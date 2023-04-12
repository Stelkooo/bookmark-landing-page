import Image from 'next/image';
import Link from 'next/link';

import Close from 'public/images/icon-close.svg';
import Logo from 'public/images/logo-bookmark.svg';
import Facebook from 'public/images/icon-facebook.svg';
import Twitter from 'public/images/icon-twitter.svg';

type Props = {
  menuToggle?: () => void;
  header?: boolean;
};

export default function NavAndSocials({ menuToggle, header }: Props) {
  return (
    <>
      <div
        className={`flex items-center ${
          header ? 'justify-between' : 'justify-center'
        }`}
      >
        <Image src={Logo} alt="Bookmark Logo" className="invert" />
        <button type="button" onClick={() => menuToggle && menuToggle()}>
          {header && (
            <Image
              src={Close}
              alt="Hamburger Menu, click here to close navigation menu"
            />
          )}
        </button>
      </div>
      <nav className="text-xl text-white">
        <ul
          className={`text-center font-normal uppercase tracking-widest ${
            header ? 'mb-6' : 'flex flex-col gap-8 text-sm'
          }`}
        >
          <Link href="#features">
            <li className={`${header ? 'border-y border-y-grey py-6' : ''}`}>
              Features
            </li>
          </Link>
          <Link href="#pricing">
            <li className={`${header ? 'border-b border-y-grey py-6' : ''}`}>
              Pricing
            </li>
          </Link>
          <Link href="#contact">
            <li className={`${header ? 'border-b border-y-grey py-6' : ''}`}>
              Contact
            </li>
          </Link>
        </ul>
        {header && (
          <button
            type="button"
            className="w-full rounded-md border-2 border-white py-4 font-medium uppercase tracking-widest"
          >
            Login
          </button>
        )}
      </nav>
      <div className="mt-auto flex gap-10 self-center">
        <Link href="facebook.com">
          <Image src={Facebook} alt="Link to Bookmark's Facebook Page" />
        </Link>
        <Link href="twitter.com">
          <Image src={Twitter} alt="Link to Bookmark's Twitter Page" />
        </Link>
      </div>
    </>
  );
}

NavAndSocials.defaultProps = {
  menuToggle: null,
  header: false,
};
