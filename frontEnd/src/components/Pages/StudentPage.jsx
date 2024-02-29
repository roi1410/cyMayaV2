import React from "react";
import StudentForms from "../AllForms/StudentForms";
import { useFieldArray } from "react-hook-form";
import AppendFields from "../UI/AppendFields";
import RemoveFields from "../UI/RemoveFields";

function StudentPage({ register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });
  return (
    <>
      <div>StudentPage</div>
      <AppendFields append={append}/>
      <RemoveFields fields={fields} remove={remove}/>

    {fields.map((field,index)=>{
      return(
        <div key={field.id}>
          <StudentForms index={index} />

        </div>
      )
    })}
    </>
  );
}

export default StudentPage;
