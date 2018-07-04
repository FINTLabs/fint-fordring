import {BASEURL} from "./BASEURL";

class GroupApi {
    static fetchCustomerGroupsFromBasisgruppe(orgId) {
        const url = BASEURL + '/group/basisgruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => Promise.all([result, result.json()]));
    }
}

export default GroupApi