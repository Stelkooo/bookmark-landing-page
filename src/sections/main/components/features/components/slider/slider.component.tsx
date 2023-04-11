import { useState } from 'react';

import { ISliderObj } from '@/types/types';

import FeatureTab1 from 'public/images/illustration-features-tab-1.svg';
import FeatureTab2 from 'public/images/illustration-features-tab-2.svg';
import FeatureTab3 from 'public/images/illustration-features-tab-3.svg';

import Radio from '@/components/radio/radio.component';
import Slide from '../slide/slide.component';

const slides: ISliderObj[] = [
  {
    id: 1,
    src: FeatureTab1,
    heading: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 2,
    src: FeatureTab2,
    heading: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 3,
    src: FeatureTab3,
    heading: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];

export default function Slider() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  return (
    <>
      <div className="grid text-center text-base tracking-wide text-navy">
        <Radio
          value="Simple Bookmarking"
          id={1}
          currentSlideId={currentSlideId}
          setCurrentSlideId={setCurrentSlideId}
        />
        <Radio
          value="Speedy Searching"
          id={2}
          currentSlideId={currentSlideId}
          setCurrentSlideId={setCurrentSlideId}
        />
        <Radio
          value="Easy Sharing"
          id={3}
          currentSlideId={currentSlideId}
          setCurrentSlideId={setCurrentSlideId}
        />
      </div>
      <Slide
        slide={slides.find((slide) => slide.id === currentSlideId) || slides[0]}
      />
    </>
  );
}
