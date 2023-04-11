import Image from 'next/image';

import { ISliderObj } from '@/types/types';

import Button from '@/components/button/button.component';

type Props = {
  slide: ISliderObj;
};

export default function Slide({ slide }: Props) {
  return (
    <div className="relative before:absolute before:right-9 before:top-9 before:-z-10 before:h-[203px] before:w-[577px] before:rounded-full before:bg-blue">
      <div className="text-center">
        <Image src={slide.src} alt="" className="mb-[4.5rem]" />
        <div className="mb-4">
          <h2 className="mb-4">{slide.heading}</h2>
          <p>{slide.description}</p>
        </div>
        <Button color="blue">More Info</Button>
      </div>
    </div>
  );
}
