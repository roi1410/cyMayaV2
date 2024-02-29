import React from "react";

function ToggleSwich({ register,keyName }) {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input {...register(keyName)} className="sr-only peer" type="checkbox" />
        האם התלמיד בשסן?
        <div className="group peer ring-2  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-10 after:w-10 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-125"></div>
      </label>
    </div>
  );
}

export default ToggleSwich;
