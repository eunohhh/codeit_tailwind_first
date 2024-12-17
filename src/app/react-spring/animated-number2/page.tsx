'use client';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

function AnimatedNumberReactSpring({ value }: { value: number }) {
  // const { number } = useSpring({
  //   from: { number: 0 },
  //   to: { number: value },
  //   config: { duration: 1000 },
  // });

  const [props, api] = useSpring(
    () => ({
      from: { number: 0 },
      to: { number: value },
      config: { duration: 1000 },
    }),
    [],
  );

  useEffect(() => {
    api.start({ number: value });
  }, [value, api]);

  return <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>;
}

function ReactSpringAnimateNumber2Page() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span>{num}</span>
      <AnimatedNumberReactSpring value={num} />
    </div>
  );
}

export default ReactSpringAnimateNumber2Page;
