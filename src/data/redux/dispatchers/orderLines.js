import OrderLineApi from "../../api/OrderLineApi";
import {fetchOrderLinesError, fetchOrderLinsesSuccess} from "../actions/orderLine";


export function fetchOrderLines() {

    return (dispatch) => {
        return OrderLineApi.fetchOrderLines().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchOrderLinsesSuccess(json));
            }
            else {
                dispatch(fetchOrderLinesError());
            }
        })
    }
}
