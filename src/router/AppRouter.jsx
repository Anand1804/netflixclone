import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Page";
import AboutPage from "../pages/about/Page";
import NotFound from "../pages/404/Page";
import DashboardPage from "../pages/dashboard/Page";
import OrderPage from "../pages/dashboard/order/Page";
import CustomerPage from "../pages/dashboard/customer/Page";
import Employee from "../pages/employee/Employee";
import EmployeeSalaryPage from "../pages/employee/salary/Page";
import EmployeeInsurancePage from "../pages/employee/insurance/Page";
import LandingPage from "../pages/public/landing/Page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/home" index element={<HomePage />} />
        <Route path="/about" index element={<AboutPage />} />
        <Route path="/dashboard" index element={<DashboardPage />} />
        <Route path="/dashboard/order" index element={<OrderPage />} />
        <Route path="/dashboard/customer" index element={<CustomerPage />} />

        {/* <Route path="/employee" index element={<Employee />}>
          <Route path="salary" element={<EmployeeSalaryPage />} />
         <Route path="insurance" element={<EmployeeInsurancePage />} />
        </Route>*/}

        <Route path="/employee" element={<Employee />}>
          <Route path="salary" element={<EmployeeSalaryPage />} />
          <Route path="insurance" element={<EmployeeInsurancePage />} />
        </Route>

        <Route path="*" index element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
