
import { AppStateType } from "./redux-store";
export const getActiveEmployees = (state: AppStateType) => {
  return state.employeesPage.activeEmployees;
};
export const getEmployees = (state: AppStateType) => {
  return state.employeesPage.employees;
};
