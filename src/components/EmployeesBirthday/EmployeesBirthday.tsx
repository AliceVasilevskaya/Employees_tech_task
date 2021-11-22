import React, { FC } from "react";
import styles from "./EmployeesBirthday.module.css";
import { EmployeeBirthdayItem } from "./EmployeeBirthdayItem/EmployeeBirthdayItem";
import moment from "moment";
import { EmployeeType } from "../../common/global_prop_types";
import { withSortingByKeys } from "../../HOCs/withSortingByKeys";

type PropsType = {
  activeEmployees: Array<EmployeeType>;
};

export const EmployeesBirthday: FC<PropsType> = ({ activeEmployees }) => {
  let months = moment.months();
  months = months.concat(months.splice(0, months.length - 2));
  let EmployeesBirthdayItems = withSortingByKeys(EmployeeBirthdayItem);

  return (
    <div className={styles.employeesBirthday}>
      <h3>Employees Birthday</h3>
      <hr />
      {activeEmployees.length < 1 ? (
        <div> Employees List is empty </div>
      ) : (
        <EmployeesBirthdayItems
          keys={months}
          array={activeEmployees}
          sortBy={"lastName"}
        />
      )}
    </div>
  );
};
