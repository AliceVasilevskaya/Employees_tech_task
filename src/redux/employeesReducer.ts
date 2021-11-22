import { BaseThunkType, InferActionTypes, store } from "./redux-store";
import { employeesAPI } from "../api/api";
import { ActiveEmployeesType, EmployeeType } from "../common/global_prop_types";
import {
  getActiveEmployeesFromSession,
  setActiveEmployeesToSession,
} from "../utils/helpers";
import { Dispatch } from "react";

let initialState = {
  employees: [] as Array<EmployeeType>,
  activeEmployees: getActiveEmployeesFromSession() as ActiveEmployeesType,
};

type ActionTypes = InferActionTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes>;
export type InitialStateType = typeof initialState;

const employeesReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "employees/SET_EMPLOYEES_DATA":
      return { ...state, employees: action.employees };
    case "employees/SET_ACTIVE_EMPLOYEES":
      return {
        ...state,
        activeEmployees: {
          ...state.activeEmployees,
          ...action.activeEmployees,
        },
      };
    default:
      return state;
  }
};

export const actions = {
  setEmployeesData: (employees: Array<EmployeeType>) =>
    ({ type: "employees/SET_EMPLOYEES_DATA", employees } as const),
  setActiveEmployees: (activeEmployees: ActiveEmployeesType) =>
    ({ type: "employees/SET_ACTIVE_EMPLOYEES", activeEmployees } as const),
};

export const requestEmployees = (): ThunkType => async (dispatch) => {
  let data = await employeesAPI.getEmployees();
  dispatch(actions.setEmployeesData(data));
};

export const toggleEmployee =
  (employeeId: EmployeeType["id"], isActive: boolean) =>
  (
    dispatch: Dispatch<ActionTypes>,
    getState: () => ReturnType<typeof store.getState>
  ) => {
    dispatch(actions.setActiveEmployees({ [employeeId]: isActive }));
    setActiveEmployeesToSession(getState().employeesPage.activeEmployees);
  };


export default employeesReducer;

