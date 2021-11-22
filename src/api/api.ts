import axios from "axios";
import { EmployeeType } from "../common/global_prop_types";

export let instance = axios.create({
  baseURL: `https://yalantis-react-school-api.yalantis.com/api/task0/`,
});
export let employeesAPI = {
  getEmployees() {
    return instance
      .get<Array<EmployeeType>>(`users`)
      .then((response) => response.data);
  },
};

