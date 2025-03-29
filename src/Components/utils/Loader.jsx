import React from "react";
 
const Loader = () => {
  const circleCommonClasses =
    "h-3.5 w-3.5 bg-current rounded-full text-blue-900";
 
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-60px)] left-1/2 absolute">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      </div>
      <h3 className="sr-only">Loading</h3>
    </>
  );
};
 
export default Loader;