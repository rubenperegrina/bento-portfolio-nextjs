import IntroCard from "@/components/IntroCard";
import GithubCard from "@/components/GithubCard";
import ToggleCard from "@/components/ToggleCard";
import MailCard from "@/components/MailCard";
import { useState } from "react";
import LinkedinCard from "@/components/LinkedinCard";
import SkillsCard from "@/components/SkillsCard";
import EnglishCard from "@/components/EnglishCard";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <div className="flex justify-center items-center">
        <p>Under construction</p>
      </div>
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
      >
        <IntroCard section={section} />
        <GithubCard section={section} />
        <ToggleCard section={section} />
        <LinkedinCard section={section} />
        <SkillsCard section={section} />
        <EnglishCard section={section}/>
        <MailCard section={section} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <p>Made with love by Rubén Peregrina</p>
      </div>
    </div>
  );
}

export default Home;
