import { IBrowserCard } from '@/types/types';

import Chrome from 'public/images/logo-chrome.svg';
import Firefox from 'public/images/logo-firefox.svg';
import Opera from 'public/images/logo-opera.svg';

import BrowserCard from '../browser-card/browser-card.component';

const data: IBrowserCard[] = [
  {
    logo: Chrome,
    browser: 'Chrome',
    minVer: '62',
  },
  {
    logo: Firefox,
    browser: 'Firefox',
    minVer: '55',
  },
  {
    logo: Opera,
    browser: 'Opera',
    minVer: '46',
  },
];

export default function BrowserCards() {
  return (
    <div className="grid gap-y-10">
      {data.map((card) => (
        <BrowserCard card={card} key={card.browser} />
      ))}
    </div>
  );
}
