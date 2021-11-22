export type EmployeeType = {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
};

export type ActiveEmployeesType = Record<EmployeeType["id"], boolean>;
export type toggleEmployeeType = (
  id: EmployeeType["id"],
  value: boolean
) => void;