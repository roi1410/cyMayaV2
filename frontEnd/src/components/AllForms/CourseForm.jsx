import React from "react";
// form Cosrse

// silabuse

function CourseForm({register}) {
  return (
    <>
      <label  className="block mb-2 font-bold text-secondary">
        שם הקורס
      </label>
      <input
        type="text"
        {...register("courseName")}
        placeholder="יש להזין את שם הקורס"
        className="border border-gray-300 shadow p-3 w-full rounded mb-"
      />
    </>
  );
}

export default CourseForm;
