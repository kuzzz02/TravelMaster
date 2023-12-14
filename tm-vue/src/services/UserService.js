import http from "../api";

class UserService{
    create(data){
        return http.post("/user",data)
    }
    delete(id){
        return http.delete(`/user/${id}`)
    }
    update(id,data){
        return http.put(`/user/${id}`,data)
    }
    getUser(data){
        return http.get("/user",data)
    }
};

export default new UserService();