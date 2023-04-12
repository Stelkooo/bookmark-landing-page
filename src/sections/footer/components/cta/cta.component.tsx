import { FormEvent, useRef } from 'react';
import { ZodError, z } from 'zod';
import { useToggle } from 'usehooks-ts';

import Button from '@/components/button/button.component';

const Email = z.object({
  email: z.string().email(),
});

export default function CTA() {
  const [isError, setIsError] = useToggle(false);
  const input = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (input.current) {
        Email.parse({ email: input.current.value });
        if (isError) setIsError();
      }
    } catch (error) {
      if (error instanceof ZodError && isError === false) setIsError();
    }
  };
  return (
    <div className="grid gap-y-8 bg-blue px-8 py-[3.75rem]">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[4.62px] text-white">
          35,000+ Already Joined
        </span>
        <h2 className="text-white">
          Stay up-to-date with what we&apos;re doing
        </h2>
      </div>
      <form className="grid gap-y-4" onSubmit={submitHandler}>
        <div
          className={`relative ${
            isError
              ? "mb-4 before:absolute before:-bottom-5 before:w-full before:rounded-b-md before:bg-red before:px-3 before:pb-1 before:pt-2 before:text-[10px] before:font-medium  before:italic before:text-white before:content-['Whoops,_make_sure_its_an_email'] after:absolute after:right-4 after:top-3 after:content-[url('/images/icon-error.svg')]"
              : ''
          }`}
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className={`relative w-full rounded-md px-5 py-[0.625rem] text-sm ${
              isError ? 'border-2 border-red' : ''
            }`}
            ref={input}
          />
        </div>

        <Button color="red" isSubmit>
          Contact Us
        </Button>
      </form>
    </div>
  );
}
