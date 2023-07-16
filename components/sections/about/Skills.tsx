import { useState } from "react";

const Skills = () => {
  const skillsCategories = ["tech", "soft"];
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0]);

  const handleSkill = (skillCategory) => {
    setActiveCategory(skillCategory);
  };

  return (
    <>
      {/* Button tabs */}
      <div className="flex justify-around gap-2 font-medium text-lg mt-8 mb-6">
        <button
          onClick={() => handleSkill(skillsCategories[0])}
          className={`w-1/2 ${
            activeCategory === "tech"
              ? "button-selected border-b-primary translate-x-1 "
              : "border-b-transparent"
          }`}
        >
          Tech Skills
        </button>
        <button
          onClick={() => handleSkill(skillsCategories[1])}
          className={`w-1/2 ${
            activeCategory === "soft"
              ? "button-selected border-b-primary "
              : "border-b-transparent"
          }`}
        >
          Soft Skills
        </button>
      </div>
      {/* Content tabs */}
      <div className={"columns-2"}>
        {activeCategory === "tech" ? (
          <ul className={""}>
            <li className={"list-title"}>Languages</li>
            <li className={"list-item"}>JavaScript(ES6)</li>
            <li className={"list-item"}>Python</li>
            <li className={"list-item"}>Java</li>
            <li className={"list-item"}>Dart</li>
            <li className={"list-title"}>Mobile Frameworks</li>
            <li className={"list-item"}>Flutter</li>
            <li className={"list-title"}>Frontend</li>
            <li className={"list-item"}>React</li>
            <li className={"list-item"}>NextJS</li>
            <li className={"list-item"}>HTML</li>
            <li className={"list-item"}>CSS, TailwindCSS, Style Components</li>
            <li className={"list-title"}>Design</li>
            <li className={"list-item"}>Material Design 3</li>
            <li className={"list-item"}>Figma</li>
            <li className={"list-title"}>Others</li>
            <li className={"list-item"}>Git</li>
            <li className={"list-item"}>Firebase</li>
            <li className={"list-item"}>Agile Methodologies</li>
            <li className={"list-item"}>Blender</li>
          </ul>
        ) : (
          <ul>
            <li>activeCategory</li>
            <li>activeCategory</li>
            <li>activeCategory</li>
            <li>activeCategory</li>
            <li>activeCategory</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Skills;
