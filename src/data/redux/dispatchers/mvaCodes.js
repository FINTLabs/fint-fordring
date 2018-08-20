import MvaApi from "../../api/MvaApi";
import {fetchMvaCodesError, fetchMvaCodesSuccess} from "../actions/mvaCode";


export function fetchMvaCodes() {

    return (dispatch) => {
        return MvaApi.fetchMvaCodes().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchMvaCodesSuccess(json));
            }
            else {
                dispatch(fetchMvaCodesError());
            }
        })
    }
}
