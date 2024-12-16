'use client';

import { animated, useSpring } from '@react-spring/web';

export default function ReactSpringAnimateNumberPage() {
  // const [currentNumber, setCurrentNumber] = useState(0);
  const [props, api] = useSpring(
    () => ({
      from: { number: 0 },
      to: { number: 100 },
      config: { duration: 2000 },
    }),
    [],
  );

  const handleStart = () => {
    // setCurrentNumber(100);
    api.start({ number: 100 });
  };

  const handleReset = () => {
    // setCurrentNumber(0);
    api.start({ number: 0 });
  };

  // useEffect(() => {
  //   api.start({ number: currentNumber });
  // }, [currentNumber, api]);

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleStart}>
        Start
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleReset}>
        reset
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => api.stop()}>
        stop
      </button>
      <animated.span>{props.number.to((x) => x.toFixed(0))}</animated.span>
    </div>
  );
}
