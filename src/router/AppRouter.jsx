import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Page";
import AboutPage from "../pages/about/Page";
import NotFound from "../pages/404/Page";
import DashboardPage from "../pages/dashboard/Page";
import OrderPage from "../pages/dashboard/order/Page";
import CustomerPage from "../pages/dashboard/customer/Page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<DashboardPage />} />
        <Route path="/about" index element={<AboutPage />} />
        <Route path="/dashboard" index element={<DashboardPage />} />
        <Route path="/dashboard/order" index element={<OrderPage />} />
        <Route path="/dashboard/customer" index element={<CustomerPage />} />

        <Route path="*" index element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
