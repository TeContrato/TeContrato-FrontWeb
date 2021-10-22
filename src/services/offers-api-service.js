import http from './http.common';

class OffersApiService {

    getAll() {
        return http.get('/offers');
    }
    get(id) {
        return http.get(`/offers/${id}`);
    }
}

export default new OffersApiService();