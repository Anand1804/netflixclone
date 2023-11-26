import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Page";
import AboutPage from "../pages/about/Page";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" index element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
