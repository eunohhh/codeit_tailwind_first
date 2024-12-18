'use client';

import { cn } from '@nextui-org/react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const PAGE_TITLES = ["Don't", 'you', 'just', 'hate', 'popups?'];

function ObservedComponent({ title }: { title: string }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1
        ref={ref}
        className={cn(
          'opacity-0 text-4xl font-bold transition-opacity duration-1000',
          inView ? 'opacity-100' : '',
        )}
      >
        {title}
      </h1>
    </div>
  );
}

function ReactIntersectionObserverPage() {
  return (
    <div className="w-full h-auto flex flex-col">
      {PAGE_TITLES.map((title, index) => (
        <ObservedComponent key={index} title={title} />
      ))}
    </div>
  );
}

export default ReactIntersectionObserverPage;
