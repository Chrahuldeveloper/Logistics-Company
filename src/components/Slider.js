import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Data from "../Data/SliderData";
export default function Slider() {
  const [index, setindex] = useState(0);

  const forward = () => {
    if (index === Data.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      return;
    }
    setindex(index - 1);
  };

  return (
    <div className="w-screen">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${Data[index].image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <div className="flex justify-between h-screen items-center px-3 md:px-10 gap-7">
          <AiOutlineArrowLeft
            onClick={prev}
            size={30}
            className="md:hover:bg-orange-500 w-14 h-14 md:w-11 md:h-11 rounded-full"
            color="white"
            cursor={"pointer"}
          />

          <div className="text-center md:text-left space-y-3 lg:space-y-4 ">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              {Data[index].Tittle}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              {Data[index].HighLight}
            </h2>
            <p className="text-white font-semibold max-w-3xl md:text-lg leading-7">
              {Data[index].Para}
            </p>
          </div>

          <AiOutlineArrowRight
            onClick={forward}
            size={30}
            className="md:hover:bg-orange-500 md:w-11 md:h-11 w-14 h-14 rounded-full"
            color="white"
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
}
