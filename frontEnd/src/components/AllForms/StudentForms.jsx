import React, { useContext } from "react";
import { allContext } from "../../MainContext";
import ImgInput from "../UI/ImageInput";
import ToggleSwich from "../UI/ToggleSwich";

function StudentForms({index}) {
  const { register, control } = useContext(allContext);
  // course: { type: mongoose.Schema.Types.ObjectId, ref: "  Course" },
  // name: { type: String },
  // email: { type: String },
  // phoneNumber: { type: Number },
  // //   grades: [
  // //     {
  // //       testId: Schema.Types.ObjectId,
  // //     },
  // //   ],
  // isShasan: { type: Boolean },
  // coursePaymentImg: { type: String },
  // barrowImgs: [{ type: String }],

  // gitHubAccount: { type: String },
  // });
  return (
    <div className="flex flex-col">
      <div>
        <label className="block mb-2 font-bold text-secondary">שם התלמיד</label>
        <input
          type="text"
          {...register(`students.${index}.name`)}
          placeholder="יש להזין את שם התלמיד"
          className="border border-gray-300 shadow p-3 w-full rounded mb-"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-secondary">מייל </label>
        <input
          type="text"
          {...register(`students.${index}.email`)}
          placeholder="יש להזין את שם התלמיד"
          className="border border-gray-300 shadow p-3 w-full rounded mb-"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-secondary">מספר פלאפון </label>
        <input
          type="number"
          {...register(`students.${index}.phoneNumber`, {
            valueAsNumber: true,
          })}
          placeholder="מספר פלאפון    "
          className="border border-gray-300 shadow p-3 w-full rounded mb-"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-secondary">חשבון גיט </label>
        <input
          type="text"
          {...register(`students.${index}.gitHubAccount`)}
          placeholder="יש להזין את  חשבון הגיט"
          className="border border-gray-300 shadow p-3 w-full rounded mb-"
        />
      </div>
   
      <h1>קבלה על התשלום</h1>
      <ImgInput index={index} keyName={`barrowImgs`} />
      <h1>אם מישהו השאיל משהו</h1>
      <ImgInput index={index} keyName={`coursePaymentImg`} />
      
      <ToggleSwich keyName={`students.${index}.isShasan`} register={register}/>

    </div>
  );
}

export default StudentForms;
