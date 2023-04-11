import Image from 'next/image';

import HamburgerMenu from 'public/images/icon-hamburger.svg';

type Props = {
  menuToggle: () => void;
};

export default function Navigation({ menuToggle }: Props) {
  return (
    <nav>
      <button type="button" onClick={() => menuToggle()}>
        <Image
          src={HamburgerMenu}
          alt="Hamburger Menu, click here for navigation menu"
        />
      </button>
    </nav>
  );
}
