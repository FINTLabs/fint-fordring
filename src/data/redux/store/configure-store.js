import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import customer from "../reducers/customer";
import me from "../reducers/me";
import payment from "../reducers/payment";
import orderLine from "../reducers/orderLine";
import mvaCode from "../reducers/mvaCode";
import date from "../reducers/date";
import employer from "../reducers/employer";
import allCustomerGroup from "../reducers/allCustomerGroup";

const logger = createLogger();
const store = createStore(
    combineReducers({
        customer,
        me,
        payment,
        orderLine,
        mvaCode,
        date,
        employer,
        allCustomerGroup,
    }),
    applyMiddleware(thunkMiddleware, logger)
);

export default store;
