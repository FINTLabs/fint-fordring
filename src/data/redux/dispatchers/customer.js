import CustomerApi from "../../api/CustomerApi";
import {fetchCostumersError, fetchCostumersSuccess} from "../actions/customer";


export function fetchCustomers() {

    return (dispatch) => {
        return CustomerApi.fetchCustomers().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchCostumersSuccess(json));
            }
            else {
                dispatch(fetchCostumersError());
            }
        })
    }
}
