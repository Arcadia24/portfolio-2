import React from "react";

const Card = ({
  experienceTitle,
  workingPlace,
  locationTime,
  content,
  img,
}: {
  experienceTitle: string;
  workingPlace: string;
  locationTime: string;
  content: string[];
  img: string;
}) => {
  return (
    <div className="max-w-lg p-6 shadow-lg rounded-lg flex flex-col border">
      <div className="flex items-center mb-4 ">
        <img
          src={img}
          alt="Company Logo"
          className="mr-4 rounded-md object-contain h-16 w-16"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white">{experienceTitle}</h2>
          <h3 className="text-lg text-white-100">{workingPlace}</h3>
          <p className="text-sm text-white-100">{locationTime}</p>
        </div>
      </div>

      <ul className="list-disc list-inside text-white-200">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
