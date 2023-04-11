import React from 'react';

type Props = {
  value: string;
};

export default function Radio({ value }: Props) {
  return (
    <label
      htmlFor={value}
      className="relative border-b border-blue border-opacity-20 py-5"
    >
      <input
        type="radio"
        id={value}
        name="features"
        className="peer/input hidden"
      />
      <span className="peer-checked/input:after capitalize peer-checked/input:after:absolute peer-checked/input:after:inset-x-0 peer-checked/input:after:bottom-0 peer-checked/input:after:mx-auto peer-checked/input:after:h-1 peer-checked/input:after:w-36 peer-checked/input:after:bg-red peer-checked/input:after:text-center">
        {value}
      </span>
    </label>
  );
}