class GroupApi {
    static fetchCustomerGroupsFromBasisgruppe(orgId) {
        const url = '/group/basisgruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }

    static fetchAllCustomerGroups(orgId) {
        const url = '/group';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }

    static fetchCustomerGroupsFromKontaktlarergruppe(orgId) {
        const url = '/group/kontaktlarergruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }

    static fetchCustomerGroupsFromUndervisningsgruppe(orgId) {
        const url = '/group/undervisningsgruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }
}

export default GroupApi