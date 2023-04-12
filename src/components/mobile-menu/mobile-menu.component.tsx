import NavAndSocials from '../nav-and-socials/nav-and-socials.component';

type Props = {
  menuToggle?: () => void;
};

export default function MobileMenu({ menuToggle }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col gap-10 bg-navy px-8 py-10 opacity-95">
      <NavAndSocials menuToggle={menuToggle} header />
    </div>
  );
}

MobileMenu.defaultProps = {
  menuToggle: null,
};
