import { combineReducers } from "redux";
import amountReducer from "./amountReducers";
import themeReducer from "./themeReducer"

const reducers = combineReducers({
    amount : amountReducer,
    theme: themeReducer
})

export default reducers;