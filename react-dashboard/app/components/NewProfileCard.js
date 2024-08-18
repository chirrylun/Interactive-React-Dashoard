import React from "react";
import CardContainer from "./CardContainer";
import ProfileBar from "./ProfileBar";

const NewProfileCard = () => {
  return (
    <div className="p-2 bg-white m-2">
        <h1 className="font-sans text-primary text-md mb-4">
            Create a new profile to get started
        </h1>
      <CardContainer content={<ProfileBar />} />
    </div>
  );
};

export default NewProfileCard;
