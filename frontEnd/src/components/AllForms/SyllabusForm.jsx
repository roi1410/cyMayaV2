import React from "react";
import { useFieldArray } from "react-hook-form";
import AppendFields from "../UI/AppendFields";
import RemoveFields from "../UI/RemoveFields";
import EventForm from "./EventForm";

function SyllabusForm({ register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects",
  });

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1>ליצור סילבוס</h1>
        <RemoveFields remove={remove} fields={fields} />
        <AppendFields append={append} />
        {fields.map((field, index) => {
          return (
            <div className="flex flex-wrap" key={field.id}>
              <label className=" text-sm font-medium text-secondary ">
              שם הנושא
              </label>
              <input
                className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                {...register(`syllabus.subjects.${index}.subjectName`)}
              />
              <label className=" text-sm font-medium text-secondary">
                 כמה שעות מקדישים 
              </label>
              <input
                type="number"
                className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                {...register(`syllabus.subjects.${index}.hours`, {
                  valueAsNumber: true,
                })}
              />
            </div>
          );
        })}
        
      </div>
    </>
  );
}

export default SyllabusForm;
