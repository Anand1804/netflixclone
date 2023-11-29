import { Outlet } from "react-router-dom";
const Employee = () => {
  return (
    <>
      <h1>EmployeePage</h1>
      <Outlet />
    </>
  );
};
export default Employee;
