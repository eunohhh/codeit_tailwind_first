'use client';

import { cn } from '@nextui-org/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PAGE_TITLES = ["Don't", 'you', 'just', 'hate', 'popups?2'];

function ObservedComponent({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInVew = useInView(ref, { amount: 0.5 });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1
        ref={ref}
        className={cn(
          'opacity-0 text-4xl font-bold transition-opacity duration-1000',
          isInVew ? 'opacity-100' : '',
        )}
      >
        {title}
      </h1>
    </div>
  );
}

function FramerMotionUseInviewPage() {
  return (
    <div className="w-full h-auto flex flex-col">
      {PAGE_TITLES.map((title, index) => (
        <ObservedComponent key={index} title={title} />
      ))}
    </div>
  );
}

export default FramerMotionUseInviewPage;
