import { ActiveEmployeesType, EmployeeType } from "../common/global_prop_types";

export const SetValuesByKeys = (key: string, arr: Array<EmployeeType>) => {
  let map: Map<string, Array<EmployeeType>> = new Map();
  let array: Array<EmployeeType> = [];

  for (let employee of arr) {
    let birthdayMonth = new Date(employee.dob).toLocaleString("en-GB", {
      month: "long",
    });
    if (key.length === 1 && key === employee.firstName[0]) {
      !array.includes(employee) && array.push(employee);
      map.set(key, array);
    } else if (key.length > 1 && key === birthdayMonth) {
      !array.includes(employee) && array.push(employee);
      map.set(key, array);
    }
  }
  return map;
};

export const getArrayFromMapKeys = (
  key: string,
  array: Array<EmployeeType>
) => {
  let mapKeys = SetValuesByKeys(key, array);
  for (let i of mapKeys.keys()) {
    return mapKeys.get(i);
  }
};

export const sortArrayByName = (array: Array<any>, string: string) => {
  array.sort(function (a, b) {
    let nameA = a[string];
    let nameB = b[string];
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};

const SESSION_STORAGE_KEY = "activeEmployees";

export const getActiveEmployeesFromSession = (): ActiveEmployeesType => {
  const storageData = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!storageData) {
    return {};
  }
  return JSON.parse(storageData);
};

export const setActiveEmployeesToSession = (
  activeEmployees: ActiveEmployeesType
) => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(activeEmployees));
};
