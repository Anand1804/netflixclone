import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/landing/Page";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/signIn" index element={<SignIn />} />
        <Route path="/signUp" index element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
