import PaymentApi from "../../api/PaymentApi";
import {fetchPaymentsError, fetchPaymentsSuccess} from "../actions/payment";


export function fetchPayments() {

    return (dispatch) => {
        return PaymentApi.fetchPayments().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchPaymentsSuccess(json));
            }
            else {
                dispatch(fetchPaymentsError());
            }
        })
    }
}
