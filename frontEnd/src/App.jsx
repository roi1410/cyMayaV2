import MainPage from "./components/Pages/MainPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
