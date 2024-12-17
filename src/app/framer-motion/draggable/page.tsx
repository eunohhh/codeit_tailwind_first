'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function DraggablePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0); // x 값 상태 관리
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDragConstraints({
        left:
          -(containerRef.current?.scrollWidth ?? 0) +
          (containerRef.current?.getBoundingClientRect().width ?? 0),
        right: 0,
      });
    }
  }, []);

  return (
    <motion.div
      className="flex w-1/2 gap-20"
      ref={containerRef}
      drag="x"
      style={{ x: position }}
      dragConstraints={dragConstraints}
      onDragEnd={(event, info) => {
        setPosition(position + info.offset.x); // 드래그 종료 시 x 값 업데이트
      }}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="relative min-w-20 min-h-20 rounded-full bg-red-500 shadow-lg"
        ></div>
      ))}
    </motion.div>
  );
}

export default DraggablePage;
