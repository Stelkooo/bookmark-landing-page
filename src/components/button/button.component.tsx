import React from 'react';

type Props = {
  children: string;
  color: 'blue' | 'red' | 'white';
  isSubmit?: boolean;
};

export default function Button({ children, color, isSubmit }: Props) {
  const classNames: string[] = [
    'rounded-md px-4 py-[10px] font-medium shadow-md whitespace-nowrap text-sm',
  ];
  switch (color) {
    case 'blue':
      classNames.push('bg-blue text-white');
      break;
    case 'white':
      classNames.push('bg-[#f7f7f7] text-blue');
      break;
    case 'red':
      classNames.push('bg-red text-white');
      break;
    default:
      break;
  }
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={classNames.join(' ')}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
};
