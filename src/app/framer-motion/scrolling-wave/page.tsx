'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const X_LINES = 40;

const PAGE_COUNT = 5;

const INITIAL_WIDTH = 20;

function ScrollingWavePage() {
  const { scrollYProgress } = useScroll();
  // scrollYProgress(0 ~ 1)에 따라 clipPath의 반경이 변하도록 설정
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['circle(0% at 50% 50%)', 'circle(100% at 50% 50%)'],
  );

  return (
    <>
      <motion.div
        className="bg-orange-400 fixed top-0 left-0 w-full h-full"
        style={{ clipPath }}
      ></motion.div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="h-dvh w-dvw bg-gray-700" key={index} />
      ))}
    </>
  );
}

export default ScrollingWavePage;
