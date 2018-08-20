import DateApi from "../../api/DateApi";
import {fetchDatesError, fetchDatesSuccess} from "../actions/date";


export function fetchDates() {

    return (dispatch) => {
        return DateApi.fetchDates().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchDatesSuccess(json));
            }
            else {
                dispatch(fetchDatesError());
            }
        })
    }
}
