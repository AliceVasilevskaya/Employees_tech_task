import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import employeesReducer from "./employeesReducer";
import thunkMiddleWare, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  employeesPage: employeesReducer,
});

export type InferActionTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

