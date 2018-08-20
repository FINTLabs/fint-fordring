import GroupApi from "../../api/GroupApi";
import {fetchAllCustomerGroupsError, fetchAllCustomerGroupsSuccess} from "../actions/allCustomerGroups";


export function fetchAllCustomerGroups() {

    return (dispatch) => {
        return GroupApi.fetchAllCustomerGroups().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchAllCustomerGroupsSuccess(json));
            }
            else {
                dispatch(fetchAllCustomerGroupsError());
            }
        })
    }
}
