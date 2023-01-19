import React from "react";

const DevViewport = () => {
  return (
    <div
      className=" fixed left-0 bottom-0 z-50 m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 p-3 font-mono text-xs 
     text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-red-500"
    >
      <div className="z-50 block sm:hidden ">al</div>
      <div className="z-50 hidden sm:block md:hidden ">sm</div>
      <div className="z-50 hidden md:block lg:hidden ">md</div>
      <div className="z-50 hidden lg:block xl:hidden">lg</div>
      <div className="z-50 hidden xl:block 2xl:hidden ">xl</div>
      <div className=" z-50 hidden 2xl:block">2xl</div>
      {/* <div className=" z-50 hidden"></div> */}
    </div>
  );
};

export default DevViewport;
