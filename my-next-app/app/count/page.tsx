"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [current, setCurrent] = useState<number>(0);
  const [target, setTarget] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false); // 是否正在計時

  
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isCounting && current < target) {
      intervalId = setInterval(() => {
        setCurrent((prev) => {
          const nextValue = prev + 1;
          if (nextValue >= target) {
            setIsCounting(false); // 停止計時
            return target;
          }
          return nextValue;
        });
      }, 250);
    }

    return () => {
      if (intervalId) clearInterval(intervalId); // 清除計時器
    };
  }, [isCounting, current, target]);


  const handleClick = () => {
    setTarget((prev) => prev + 5); // 增加目標值
    setIsCounting(true); // 開啟計時
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">{current}</h1>
      <button
        onClick={handleClick}
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
      >
        +5
      </button>
    </div>
  );
};

export default page;
