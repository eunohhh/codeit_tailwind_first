'use client';

import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useFollowPointer } from './_libs/useFollowPointer';

function FramerMotionPage() {
  const xMotionValue = useMotionValue(0);
  const yMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, 'change', (value) => {
    console.log(value);
  });
  useMotionValueEvent(yMotionValue, 'change', (value) => {
    console.log(value);
  });
  const transform = useTransform(xMotionValue, [-50, 0, 50], ['#000', '#939393', '#ffffff']);
  const followMouseRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(followMouseRef);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        ref={followMouseRef}
        style={{ x, y }}
        className="w-10 h-10 rounded-full bg-red-500"
      ></motion.div>
      <motion.div
        style={{ x: xMotionValue, y: yMotionValue, backgroundColor: transform }}
        drag
        // dragConstraints={{ left: 0, right: 0 }}
        className="px-4 py-2 max-w-sm rounded-md bg-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        hello
      </motion.div>
    </div>
  );
}

export default FramerMotionPage;
