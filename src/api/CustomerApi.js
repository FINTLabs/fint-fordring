class CustomerApi {

    static fetchCustomers(orgId) {
        const url = '/api/customer';

        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json()
        }).catch(error => console.log(error));
    }
}

export default CustomerApi