import http from "../api";

class TravelService{

    getLocation(data){
        return http.get("/travel/locationName",data)
    }
    getHotel(data){
        return http.get("/travel/hotelName",data)
    }
    getRestaurant(data){
        return http.get("/travel/restaurantName",data)
    }
    getShopping(data){
        return http.get("/travel/shoppingName",data)
    }
    
};

export default new TravelService();
