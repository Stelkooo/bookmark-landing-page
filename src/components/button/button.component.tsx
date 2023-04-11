import React from 'react';

type Props = {
  children: string;
  color: 'blue' | 'red' | 'white';
};

export default function Button({ children, color }: Props) {
  const classNames: string[] = [
    'rounded-md px-4 py-[10px] font-medium shadow-md whitespace-nowrap',
  ];
  switch (color) {
    case 'blue':
      classNames.push('bg-blue text-white');
      break;
    case 'white':
      classNames.push('bg-[#f7f7f7] text-blue');
      break;
    default:
      break;
  }
  return (
    <button type="button" className={classNames.join(' ')}>
      {children}
    </button>
  );
}
