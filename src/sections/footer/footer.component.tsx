import NavAndSocials from '@/components/nav-and-socials/nav-and-socials.component';
import CTA from './components/cta/cta.component';

export default function Footer() {
  return (
    <div>
      <CTA />
      <div className="flex flex-col gap-12 bg-navy px-28 py-10">
        <NavAndSocials />
      </div>
    </div>
  );
}
