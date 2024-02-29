import { createContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const allContext = createContext({
  test: "",
  createGantt: () => {},
  createCourse: () => {},
  register: () => {},
  handleSubmit: () => {},
  control: {},
  setImg:()=>{},
  img:"",
  setValue:()=>{},
});

const MainContext = ({ children }) => {
  const [img, setImg] = useState('');
  const { register, handleSubmit, control,setValue } = useForm();
  const test = "test";
  async function createGantt(data) {
    try {
      const response = await axios.post(
        "http://localhost:8002/gantt/create/65df182bc9e7210350f7b814",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function createCourse(data) {
    try {
      const response = await axios.post(
        "http://localhost:8002/course/create",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <allContext.Provider
      value={{
        test,
        createGantt,
        createCourse,
        register,
        handleSubmit,
        control,
        setImg,
        img,
        setValue

      }}
    >
      {children}
    </allContext.Provider>
  );
};
export default MainContext;
