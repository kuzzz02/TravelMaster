import http from "../api";

class MapService{
    getIP(){
        return http.get("http://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=efbfaa1411f6beaab8e2438aa7820240")
    }
}

export default new MapService();
