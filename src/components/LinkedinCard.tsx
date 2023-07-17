import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
const LinkedinCard = ({ section }) => {
  return (
    <a
      href="https://www.linkedin.com/in/rubenperegrina/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
    >
      <div className="flex flex-col justify-center items-center bg-[#1178ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
      <ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
        <FaLinkedinIn className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]"/>
      </div>
    </a>
    
  );
}
export default LinkedinCard
