import MainPage from "./components/Pages/MainPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CalenderPage from "./components/Pages/CalenderPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalenderPage />}>


          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
