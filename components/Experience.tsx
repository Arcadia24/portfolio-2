import React from "react";
import { Timeline } from "./ui/timeline";
import Card from "./Card";
import { EducationExperience, workExperience } from "@/data";
import { title } from "process";

export default function Experience() {
  return (
    <div id="experience">
      <h1 className="heading">
        My <span className="text-green">Journey</span>
      </h1>
      <div className="max-w-full w-full grid grid-cols-2 pt-6">
        <div>
          <Timeline
            subject="Education"
            data={EducationExperience.map((item, key) => (
              <Card
                key={key}
                experienceTitle={item.experienceTitle}
                workingPlace={item.workingPlace}
                locationTime={item.locationTime}
                content={item.content}
                img={item.img}
              />
            ))}
          />
        </div>
        <div>
          <Timeline
            subject="Professional"
            data={workExperience.map((item, key) => (
              <Card
                key={key}
                experienceTitle={item.experienceTitle}
                workingPlace={item.workingPlace}
                locationTime={item.locationTime}
                content={item.content}
                img={item.img}
              />
            ))}
          />
        </div>
      </div>
    </div>
  );
}
