import React from "react";

const Heading = (props) => {
  return (
    <div>
      <div className="inline-block">
        <h1 className="text-4xl font-bold mb-14 border-b-4 border-orange-400">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
