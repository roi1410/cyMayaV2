import React from 'react'
import CourseForm from '../AllForms/CourseForm';
import { useForm } from "react-hook-form";
import SyllabusForm from '../AllForms/SyllabusForm';
import GanttForm from '../AllForms/GantForm';
import {format} from "date-fns"


function FormsPage() {
    
    const { register, handleSubmit,control } = useForm();
    function shit(pop) {
      console.log(pop);
      
    }

    return (
      <form onSubmit={handleSubmit((data)=>shit(data))} className=" bg-primary ring-4 ">


        
        {/* <CourseForm register={register}/> */}
        
       {/* <GanttForm register={register} control={control} /> */}
        
      
     <button type='submit'>submit</button>
      </form>
  )
}

export default FormsPage