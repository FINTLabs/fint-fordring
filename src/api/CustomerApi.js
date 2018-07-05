class CustomerApi {

    static fetchCustomers(orgId) {
        const url = '/customer';

        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json()
        });
    }
}

export default CustomerApi