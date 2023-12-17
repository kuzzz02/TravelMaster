import http from "../api";

class UserService{
    create(data){
        return http.post("/user",data)
    }
    getUser(data){
        return http.post(`/user/name`,data)
    }
    delete(id){
        return http.delete(`/user/${id}`)
    }
    update(id,data){
        return http.put(`/user/${id}`,data)
    }
    
};

export default new UserService();