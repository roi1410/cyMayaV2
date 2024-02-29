import React, { useContext, useState } from "react";
import CourseForm from "../AllForms/CourseForm";
import { useForm } from "react-hook-form";
import SyllabusForm from "../AllForms/SyllabusForm";
import GanttForm from "../AllForms/GantForm";
import { format } from "date-fns";
import { allContext } from "../../MainContext";
import Stepper from "../UI/Stepper";
import { Outlet } from "react-router-dom";

function FormsPage() {
  const { createGantt, createCourse, register, handleSubmit, control } =
    useContext(allContext);
  function handleApiFunc(data) {
    console.log(data);
    // switch (index) {
    //   case index:
    //     createCourse(data);
    //     break;
    //   case index:
    //     createGantt(data);
    //     break;
    //   case index:
    //     console.log(data);
    //     break;

    //   default:
    //     break;
    // }
  }
  const [index, setIndex] = useState(0);

  function NextStepHandler() {
    if (index < 5) {
      setIndex((prev) => prev + 1);
    }
  }
  function GoBackHandler() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => handleApiFunc(data))}
        className=" bg-primary ring-4 "
      >
        <Outlet />

        <button type="submit">submit</button>
      </form>
      <Stepper
        NextStepHandler={NextStepHandler}
        GoBackHandler={GoBackHandler}
        index={index}
      />
    </>
  );
}

export default FormsPage;
