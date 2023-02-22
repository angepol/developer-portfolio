import React from "react";
import Button from "../Button";

const WorkCard = ({ img, name, description, onClick, onHandleSubmit }) => {
  return (
    <div style={{marginBottom: "20px"}}>
    <div
    style={{marginBottom: "-20px"}}
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <h3 className="mt-5 text-3xl font-medium">
      </h3>
    </div>
    <div style={{ paddingLeft: "10px"}}>
    <Button onClick={onHandleSubmit} type="button">View
    Code 👩‍💻</Button>
    </div>
    </div>
  );
};

export default WorkCard;
