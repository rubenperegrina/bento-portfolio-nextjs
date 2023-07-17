import { motion } from "framer-motion";
const IntroCard = ({ section }) => {
  return (
    <motion.div
      className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
      whileHover="groupHover"
      animate={{ opacity: ["all"].includes(section) ? 1 : 1 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="relative overflow-hidden">
          <div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">
            Hi, I&apos;m Rubén Peregrina!
          </div>
        <div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito dark:text-gray-300">
            {" "}
            I&apos;m Fron-End Software Engineer specialized in Angular
          </div>
          <div className="flex lg:text-xl xl:text-2xl 2xl:text-2xl font-base dark:text-gray-300 mt-5">
            I&apos;m interested in travel, cars and tech!
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
