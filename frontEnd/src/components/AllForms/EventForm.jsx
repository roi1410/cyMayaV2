import React from "react";
import { useFieldArray } from "react-hook-form";
import AppendFields from "../UI/AppendFields";
import RemoveFields from "../UI/RemoveFields";
import EventInvForm from "./EventInvForm";

// howsInvited: [
//   {
//     name: String,
//     email: String,
//   },
// ],
// when: Date,
function EventForm({ register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "events",
  });
  return (
    <>
      <h1>אירוע חדש</h1>
      <AppendFields append={append} />
      <RemoveFields remove={remove} fields={fields} />
      {fields.map((ev,index) => {
        return (
          <>
          <div key={ev.id}>
            <label className=" text-sm font-medium text-secondary ">
              תאריך האירוע
            </label>
            <input
            type="date"
              className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              {...register(`events.${index}.when`,{
                valueAsDate:true
              })}
            />
            <EventInvForm register={register} control={control} eventIndex={index}/>
            </div>
          </>
        );
      })}
    </>
  );
}

export default EventForm;
