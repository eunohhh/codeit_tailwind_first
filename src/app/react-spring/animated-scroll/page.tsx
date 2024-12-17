'use client';

import { animated, useScroll } from '@react-spring/web';

function ReactSpringAnimatedScrollPage() {
  const props = useScroll();

  return (
    <div>
      <div className="w-dvw h-[200vh]">
        <animated.div
          className="h-1 bg-red-500 fixed top-0 left-0"
          style={{ width: props.scrollYProgress.to((x) => `${x * 100}%`) }}
        ></animated.div>
        <animated.div style={{ transform: props.scrollY.to((y) => `translateY(${y}px)`) }}>
          <h1>Hello</h1>
        </animated.div>
      </div>
    </div>
  );
}

export default ReactSpringAnimatedScrollPage;
