import { ArrowCircleUpIcon } from "@heroicons/react/outline";
import React from "react";

const EnglishCard = ({ section }) => {
  return (
    <a
      href="https://www.efset.org/cert/wZpLk4"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white relative rounded-3xl flex overflow-hidden aspect-square shadow-sm bg-[#2ab9adb9] p-4 justify-center items-center hover:scale-[103%] transition duration-500 ease-in-out cursor-pointer"
    >
      <div className="">
        {/* <Image src={birthday} alt="" width="100" /> */}
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs hidden md:block md:text-lg text-center uppercase font-base">
            English level
          </p>
          <p className="text-4xl md:text-9xl font-bold">B2</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            EF SET
          </p>
        </div>
        {/* <p className="text-sm hidden md:flex">{`${getBirthday()} ${t("birthday.time")}`}</p> */}
      </div>
      <ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
    </a>
  );
}
export default EnglishCard
