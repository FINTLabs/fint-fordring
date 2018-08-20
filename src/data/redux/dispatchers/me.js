import MeApi from "../../api/MeApi";
import {fetchMeError, fetchMeSuccess} from "../actions/me";


export function fetchMe() {

    return (dispatch) => {
        return MeApi.fetchMe().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchMeSuccess(json));
            }
            else {
                dispatch(fetchMeError());
            }
        })
    }
}
