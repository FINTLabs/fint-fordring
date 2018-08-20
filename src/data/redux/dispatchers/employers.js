import {fetchEmployersError, fetchEmployersSuccess} from "../actions/employer";
import EmployerApi from "../../api/EmployerApi";


export function fetchEmployers() {

    return (dispatch) => {
        return EmployerApi.fetchEmployers().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchEmployersSuccess(json));
            }
            else {
                dispatch(fetchEmployersError());
            }
        })
    }
}
