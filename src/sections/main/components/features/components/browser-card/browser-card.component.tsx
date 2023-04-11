import Image from 'next/image';

import { IBrowserCard } from '@/types/types';

import Dots from 'public/images/bg-dots.svg';
import Button from '@/components/button/button.component';

type Props = {
  card: IBrowserCard;
};

export default function BrowserCard({ card }: Props) {
  return (
    <div className="mx-auto w-[280px] rounded-2xl bg-white drop-shadow-md">
      <div className="flex flex-col items-center gap-8 pb-8 pt-12">
        <Image src={card.logo} alt={`${card.browser} Logo`} />
        <div>
          <h3>Add to {card.browser}</h3>
          <p>Minimum version {card.minVer}</p>
        </div>
      </div>
      <Image src={Dots} alt="" />
      <div className="py-6 text-center">
        <Button color="blue">Add & Install Extension</Button>
      </div>
    </div>
  );
}
