import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* 卡片容器 */}
      <div className="relative w-[400px] bg-blue-700 text-white py-6 px-20 rounded-lg  shadow-lg  shadow-black w-80 ">
        <img
          src="https://i.imgur.com/Uh6IvcO.png"
          alt="Bitcoin Icon"
          className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-orange-500 p-1 shadow-md"
        />
        <div className="flex justify-between items-center">
          {/* 標題 */}
          <h1 className="text-lg font-bold items-center">Hello</h1>
          {/* 列表 */}
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Point 1
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Point 2 xxxx
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
