import http from "../api";

class TravelService{

    getLocation(data){
        return http.post("/travel/locationName",data)
    }
    getHotel(data){
        return http.post("/travel/hotelName",data)
    }
    getRestaurant(data){
        return http.post("/travel/restaurantName",data)
    }
    getShopping(data){
        return http.post("/travel/shoppingName",data)
    }
    
};

export default new TravelService();
