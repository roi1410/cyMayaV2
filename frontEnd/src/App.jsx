import { useContext } from "react";
import CourseForm from "./components/AllForms/CourseForm";
import GanttForm from "./components/AllForms/GantForm";
import FormsPage from "./components/Pages/FormsPage";
import MainPage from "./components/Pages/MainPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { allContext } from "./MainContext";
import StudentPage from "./components/Pages/StudentPage";
import CalenderPage from "./components/Pages/CalenderPage"

export default function App() {
  const {register, control } = useContext(allContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="FormPage" element={<FormsPage />}>
            <Route path="CourseForm" element={<CourseForm register={register}/>}></Route>
            <Route path="GanttForm" element={<GanttForm control={control} register={register} />}></Route>
            <Route path="StudentPage" element={<StudentPage control={control} register={register} />}></Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
