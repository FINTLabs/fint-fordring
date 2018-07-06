class GroupApi {
    static fetchAllCustomerGroups(orgId) {
        const url = '/api/group';
        return fetch(url, {
            method: "GET",
            headers: new Headers({ 'x-org-id': orgId })
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static fetchCustomerGroupsFromBasisgruppe(orgId) {
        const url = '/api/group/basisgruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({ 'x-org-id': orgId })
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static fetchCustomerGroupsFromKontaktlarergruppe(orgId) {
        const url = '/api/group/kontaktlarergruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({ 'x-org-id': orgId })
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static fetchCustomerGroupsFromUndervisningsgruppe(orgId) {
        const url = '/api/group/undervisningsgruppe';
        return fetch(url, {
            method: "GET",
            headers: new Headers({ 'x-org-id': orgId })
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }
}

export default GroupApi