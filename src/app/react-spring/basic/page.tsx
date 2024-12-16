'use client';

import { animated, useSpring } from '@react-spring/web';
import useMeasure from 'react-use-measure';

export default function ReactSpringBasicPage() {
  const [ref, { width }] = useMeasure();
  const [props, api] = useSpring(() => ({ width: 0 }));

  const handleClick = () => {
    if (props.width.get() === 0) {
      api.start({ width: width });
      return;
    }
    api.start({ width: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <animated.p>{props.width.to((x) => x.toFixed(0))}</animated.p>
      <div
        ref={ref}
        className="relative w-[200px] h-[50px] cursor-pointer border border-gray-500 rounded-md overflow-hidden"
        onClick={handleClick}
      >
        <animated.div className="absolute inset-0 bg-pink-500" style={props} />
        <animated.div className="absolute inset-0 flex items-center justify-center text-black">
          {props.width.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}
