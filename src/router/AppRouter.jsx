import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/landing/Page";
import SignInPage from "../pages/auth/signInPage/SignInPage";
import SignUpPage from "../pages/auth/signUpPage/SignUpPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/signInPage" index element={<SignInPage />} />
        <Route path="/signUpPage" index element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
