import http from "../api";

class UserService{
    createUser(name,password){
        return http.post(`/user/${name}/${password}`)
    }
    update(id,data){
        return http.put(`/user/${id}`,data)
    }
    deleteUser(id){
        return http.delete(`/user/${id}`)
    }
    getUsername(name){
        return http.get(`/user/${name}`)
    }
    getPassword(name,password){
        return http.get(`/user/${name}/${password}`)
    }
}

export default new UserService();