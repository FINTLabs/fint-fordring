class MvaApi {
    static fetchMvaCodes(orgId) {
        const url = '/mvakode';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }
}

export default MvaApi