import React from 'react'
import CourseForm from '../AllForms/CourseForm';
import { useForm } from "react-hook-form";
import SyllabusForm from '../AllForms/SyllabusForm';


function FormsPage() {
    
    const { register, handleSubmit,control } = useForm();
    return (
      <form onSubmit={handleSubmit((data)=>console.log(data))} className=" bg-primary ring-4 ">
        
        {/* <CourseForm register={register}/> */}
       <SyllabusForm register={register} control={control} />
        
      
     
      </form>
  )
}

export default FormsPage