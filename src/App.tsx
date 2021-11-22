import React, { useCallback, useEffect, useMemo } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { EmployeesBirthday } from "./components/EmployeesBirthday/EmployeesBirthday";
import { getActiveEmployees, getEmployees } from "./redux/employeesSelectors";
import { requestEmployees, toggleEmployee } from "./redux/employeesReducer";
import { AllEmployees } from "./components/Employees/AllEmployees";
import { EmployeeType } from "./common/global_prop_types";

function App() {
  const activeEmployeesHash = useSelector(getActiveEmployees);
  const employees = useSelector(getEmployees);
  const dispatch = useDispatch();

  const activeEmployees = useMemo(() => {
    return employees.filter((employee) => activeEmployeesHash[employee.id]);
  }, [employees, activeEmployeesHash]);

  const onToggleEmployee = useCallback(
    (id: EmployeeType["id"], value: boolean) => {
      dispatch(toggleEmployee(id, value));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(requestEmployees());
  }, [dispatch]);

  return (
    <div className="App">
      <AllEmployees
        toggleEmployee={onToggleEmployee}
        activeEmployeesHash={activeEmployeesHash}
        employees={employees}
      />
      <EmployeesBirthday activeEmployees={activeEmployees} />
    </div>
  );
}

export default App;
