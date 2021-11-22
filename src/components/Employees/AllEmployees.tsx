import {
  ActiveEmployeesType,
  EmployeeType,
  toggleEmployeeType,
} from "../../common/global_prop_types";
import styles from "./Employees.module.css";
import { FC } from "react";
import { withSortingByKeys } from "../../HOCs/withSortingByKeys";
import EmployeeItem from "./Employee/EmployeeItem";

type PropsType = {
  employees: Array<EmployeeType>;
  activeEmployeesHash: ActiveEmployeesType;
  toggleEmployee: toggleEmployeeType;
};

export const AllEmployees: FC<PropsType> = ({
  employees,
  activeEmployeesHash,
  toggleEmployee,
}) => {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let EmployeeItems = withSortingByKeys(EmployeeItem);

  return (
    <div className={styles.employeesWrapper}>
      <h3>Employees</h3>
      <hr />
      <div className={styles.employees}>
        <EmployeeItems
          keys={alphabet}
          array={employees}
          sortBy={"firstName"}
          toggleEmployee={toggleEmployee}
          activeEmployeesHash={activeEmployeesHash}
        />
      </div>
    </div>
  );
};
