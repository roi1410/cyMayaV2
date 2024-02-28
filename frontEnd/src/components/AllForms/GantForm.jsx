import React from 'react'
import SyllabusForm from './SyllabusForm'
import EventForm from './EventForm'
import UnavailableDateForm from './UnavailableDateForm'

function GanttForm({register,control}) {
  return (
    <div className="flex flex-col gap-10">
    <SyllabusForm register={register} control={control}/>
    <EventForm register={register} control={control} />
    <UnavailableDateForm register={register} control={control} />
    </div>
  )
}

export default GanttForm