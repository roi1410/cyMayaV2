import React from "react";
import { Link } from "react-router-dom";

const Stepper = ({ NextStepHandler, GoBackHandler, index }) => {
  const pathArray = ["CourseForm", "GanttForm","StudentPage"];

  return (
    <div className="flex justify-between  h-11 ring-4 ring-popUp bg-secondary">
      <Link
        className="btn_primary"
        to={pathArray[index]}
        onClick={() => NextStepHandler()}
      >
        Next Step
      </Link>
      <Link className="btn_primary" to={pathArray[index]} onClick={() => GoBackHandler()}>
        Go Back
      </Link>
    </div>
  );
};

export default Stepper;
