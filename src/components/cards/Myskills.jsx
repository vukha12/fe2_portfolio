import React from "react";
import { mySkills } from "../../constants";

const Myskills = () => {
  return (
    <div className="mt-5 mb-5 flex flex-col">
      <div className="text-center ">
        <h1 className="text-4xl lg:text-5xl font-light text-white font-serif">
          My Skill
        </h1>
      </div>
      <div className="mt-5 sm:mx-30 md:mx-40 md:px-8 px-5 flex space-x-10 justify-center">
        {mySkills.map((item, key) => (
          <div
            className="flex justify-center items-center space-x-1.5"
            key={key}
          >
            <img src={item.imgPath} alt={item.name} width="40" />
            <p className="text-1xl font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myskills;
