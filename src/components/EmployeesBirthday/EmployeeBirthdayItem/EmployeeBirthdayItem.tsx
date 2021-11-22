import React, { FC } from "react";
import { EmployeeType } from "../../../common/global_prop_types";

type PropsType = {
  employee: EmployeeType;
};
export const EmployeeBirthdayItem: FC<PropsType> = ({ employee }) => {
  return (
    <li>
      {`${employee.firstName} ${employee.lastName} - 
        ${new Date(employee.dob).toLocaleString("en-GB", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })} year`}
    </li>
  );
};
