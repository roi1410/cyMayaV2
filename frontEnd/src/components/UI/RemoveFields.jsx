import React from "react";

function RemoveFields({ remove, fields }) {
  return (
    <button
      type="button"
      onClick={() => remove(fields.length - 1)}
      className="bg-red inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline bg-red-500 hover:bg-red_light "
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 15">
        <path
          d="M3 6h10a1 1 0 010 2H3a1 1 0 010-2z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export default RemoveFields;
