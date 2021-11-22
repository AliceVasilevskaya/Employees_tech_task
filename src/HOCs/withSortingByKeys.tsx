import React, { ComponentType } from "react";
import {
  ActiveEmployeesType,
  EmployeeType,
  toggleEmployeeType,
} from "../common/global_prop_types";
import { getArrayFromMapKeys, sortArrayByName } from "../utils/helpers";
import styles from "../components/Employees/Employees.module.css";
import { toggleEmployee } from "../redux/employeesReducer";

type PropsType = {
  keys: Array<string>;
  array: Array<EmployeeType>;
  sortBy: string;
  activeEmployeesHash?: ActiveEmployeesType;
  toggleEmployee?: toggleEmployeeType;
};

export function withSortingByKeys<T>(Component: ComponentType<T>) {
  let ComponentWrapper: React.FC<PropsType> = (props) => {
    return (
      <>
        {props.keys.map((key: string) => {
          let { keys, array, sortBy, ...restProps } = props;
          let arrayEmployees: Array<EmployeeType> | undefined =
            getArrayFromMapKeys(key, array);
          arrayEmployees && sortArrayByName(arrayEmployees, sortBy);
          return (
            <div className={styles.group} key={key}>
              <b>{key}</b>
              {!arrayEmployees ? (
                <span>: No Employees</span>
              ) : (
                arrayEmployees.map((employee: EmployeeType) => (
                  <Component
                    employee={employee}
                    key={employee.id}
                    isActive={props.activeEmployeesHash?.[employee.id]}
                    toggleEmployee={toggleEmployee}
                    {...(restProps as T)}
                  />
                ))
              )}
            </div>
          );
        })}
      </>
    );
  };
  return ComponentWrapper;
}
