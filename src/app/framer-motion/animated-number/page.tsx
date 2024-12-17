'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const spring = { damping: 5, stiffness: 50, restDelta: 0.001 };

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  const motionValue = useMotionValue(value);
  const springNumber = useSpring(motionValue, spring);
  const transformingNumber = useTransform(springNumber, (x) => x.toFixed(0));

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return <motion.span>{transformingNumber}</motion.span>;
}

function FramerMotionAnimateNumberPage() {
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
      <AnimatedNumberFramerMotion value={num} />
    </div>
  );
}

export default FramerMotionAnimateNumberPage;
