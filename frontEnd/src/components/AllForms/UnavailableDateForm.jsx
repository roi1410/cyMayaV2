import React from "react";
import { useFieldArray } from "react-hook-form";
import RemoveFields from "../UI/RemoveFields";
import AppendFields from "../UI/AppendFields";

function UnavailableDateForm({register,control}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "UnavailableDate",
  });
  return (
    <>
      <div>
        <h1>תאריכים לא זמינים</h1>
        <RemoveFields remove={remove} fields={fields} />
        <AppendFields append={append} />
        {fields.map((field, index) => {
          return (
            <div className="flex flex-wrap" key={field.id}>
              <label className=" text-sm font-medium text-secondary ">
                למה התאריך לא זמין
              </label>
              <input
                className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                {...register(`UnavailableDate.${index}.reason`)}
              />
              <label className=" text-sm font-medium text-secondary">
                תאריך
              </label>
              <input
                type="date"
                className="block w-25 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                {...register(`UnavailableDate.${index}.date`, {
                    valueAsDate: true,
                })}
                defaultValue={new Date().toISOString().substring(0, 10)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UnavailableDateForm;
