import { useToggle } from 'usehooks-ts';

type Props = {
  title: string;
  content: string;
};

export default function Accordion({ title, content }: Props) {
  const [isActive, toggleIsActive] = useToggle(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => toggleIsActive()}
        className={`mt-5 flex w-full items-center justify-between ${
          isActive ? 'pb-6' : 'border-b border-navy border-opacity-20 pb-3'
        }`}
      >
        <p className="text-blue">{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path
            fill="none"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
            className={`${
              isActive ? 'origin-center rotate-180 stroke-red' : 'stroke-blue'
            }`}
          />
        </svg>
      </button>
      {isActive && <p className="text-left">{content}</p>}
    </div>
  );
}
