import Image from 'next/image';

import { useToggle } from 'usehooks-ts';

import BookmarkLogo from 'public/images/logo-bookmark.svg';

import Navigation from '@/components/navigation/navigation.component';
import MobileMenu from '@/components/mobile-menu/mobile-menu.component';

export default function Header() {
  const [menu, menuToggle] = useToggle(false);
  if (menu) {
    return <MobileMenu menuToggle={menuToggle} />;
  }
  return (
    <header className="flex justify-between px-8 py-10">
      <div>
        <Image src={BookmarkLogo} alt="Bookmark Logo" />
      </div>
      <Navigation menuToggle={menuToggle} />
    </header>
  );
}
