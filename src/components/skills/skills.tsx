import "../../index.css";
import skillsData from "./envSkills.json";
import React, { useState } from "react";

const eskills = skillsData as {
  id: number;
  name: string;
  description: string;
  icon: string;
}[];

export default function Skills() {
  const [details, setDetails] = useState<string | null>(eskills[0].description); 

  return (
    <div
      className="flex flex-col h-full w-full p-15 bg-base-200 gap-20"
      id="skills"
    >
      <div className="mockup-window bg-base-100 border border-base-300">
        <h2 className="text-4xl font-bold text-center">My Skills</h2>
        <div className="flex flex-row">
          <div className="grid md:grid-cols-2 gap-5 p-5 place-items-center h-80 w-fit md:w-1/2">
            {eskills.map((skill) =>
              skillBtn(
                skill.name,
                skill.id,
                skill.description,
                setDetails
              )
            )}
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            {details && <p className="details-display">{details}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function skillBtn(
  name?: string,
  id?: number,
  deets?: string,
  setDetails?: React.Dispatch<React.SetStateAction<string | null>>
) {
  let toCheck = false;
  if (id === 1) {
    toCheck = true;
  }
  return (
    <input
      className="btn btn-square w-full h-full"
      type="radio"
      name="options"
      aria-label={name}
      defaultChecked={toCheck}
      onClick={() => {
        if (setDetails) {
          setDetails(deets || "");
        }
      }}
    />
  );
}
