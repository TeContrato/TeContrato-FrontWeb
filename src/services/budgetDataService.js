import http from './http.common';
class budgetDataService {

    getAll() {
        return http.get("/budgets");
    }

    get(id) {
        return http.get(`/budgets/${id}`);
    }

    create(data) {
        return http.post("/budgets", data);
    }

    update(id, data) {
        return http.put(`/budgets/${id}`, data);
    }

    delete(id) {
        return http.delete(`/budgets/${id}`);
    }

    deleteAll() {
        return http.delete(`/budgets`);
    }

    findByTitle(title) {
        return http.get(`/budget?title=${name}`);
    }
}

export default new budgetDataService();
