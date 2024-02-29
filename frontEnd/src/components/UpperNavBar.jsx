import React from "react";
import { NavLink } from "react-router-dom";

function UpperNavBar() {
  return (
    <div className="flex flex-row-reverse gap-6 w-90% h-20 bg-secondary">
      <div className="flex flex-row-reverse  w-full">
        <ul className=" flex selection:pt-2 pb-4 space-y-1 text-sm">
          <li className="dark:bg-gray-800 dark:text-gray-50">
            <NavLink
              rel="noopener noreferrer"
              to={"ProfileSetting"}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-400"
              >
                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
              </svg>
              <span>Setting</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UpperNavBar;
