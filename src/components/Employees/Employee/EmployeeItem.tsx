import React, { ChangeEvent, FC, useCallback } from "react";
import styles from "../Employees.module.css";
import {
  EmployeeType,
  toggleEmployeeType,
} from "../../../common/global_prop_types";

type PropsType = {
  employee: EmployeeType;
  isActive: boolean;
  toggleEmployee: toggleEmployeeType;
};

const EmployeeItem: FC<PropsType> = ({
  employee,
  isActive = false,
  toggleEmployee,
}) => {
  const onActiveChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      toggleEmployee(employee.id, e.target.value === "true");
    },
    [employee, toggleEmployee]
  );

  return (
    <div className={styles.employeeItem}>
      <div className={isActive ? styles.selected : styles.notSelected}>
        {`${employee.firstName}
              ${employee.lastName}`}
      </div>
      <div>
        <form>
          <label>
            <input
              type="radio"
              name="isActive"
              value="true"
              defaultChecked={isActive}
              onChange={onActiveChange}
            />
            active
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="isActive"
              onChange={onActiveChange}
              value="false"
              defaultChecked={!isActive}
            />
            not active
          </label>
        </form>
      </div>
    </div>
  );
};
export default EmployeeItem;
