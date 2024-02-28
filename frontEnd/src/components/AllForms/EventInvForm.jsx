import React from 'react'
import { useFieldArray } from 'react-hook-form';
import AppendFields from '../UI/AppendFields';
import RemoveFields from '../UI/RemoveFields';

function EventInvForm({register,control,eventIndex}) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `howsInvited`,
      });
      return (
        <>
          <h1>אירוע חדש</h1>
          <AppendFields append={append} />
          <RemoveFields remove={remove} fields={fields} />
          
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex flex-wrap">
                <label className=" text-sm font-medium text-secondary ">
                  שם המוזמן
                </label>
                <input
                  className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  {...register(`events.${eventIndex}.howsInvited.${index}.name`)}
                />
                <label className=" text-sm font-medium text-secondary ">מייל</label>
                <input
                  className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  {...register(`events.${eventIndex}.howsInvited.${index}.email`)}
                />
              </div>
            );
          })}
        </>
      );
    }

export default EventInvForm