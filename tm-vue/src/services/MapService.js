import http from "../api";

class MapService{
    Geocoding(address){
        return http.get(`/map/geocoding/${address}`)
        // return http.get("https://restapi.amap.com/v3/geocode/geo?address=北京市朝阳区阜通东大街6号&output=XML&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    routePlanning(ori,dst){
        return http.get(`/map/route/${ori}${des}`)
        // return http.get("https://restapi.amap.com/v3/direction/driving?origin=116.45925,39.910031&destination=116.587922,40.081577&output=xml&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    searchService(address){
        return http.get(`/map/search${address}`)
        // return http.get("https://restapi.amap.com/v3/place/text?keywords=北京大学&city=beijing&offset=20&page=1&key=efbfaa1411f6beaab8e2438aa7820240&extensions=all")
    }
    getIP(ip){
        return http.get(`/map/ip/${ip}`)
        // return http.get("http://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    getMap(address){
        return http.get(`/map/map/${address}`)
        // return http.get("https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    IpTransform(address){
        return http.get(`/map/iptrans/${address}`)
        // return http.get("https://restapi.amap.com/v3/assistant/coordinate/convert?locations=116.481499,39.990475&coordsys=gps&output=xml&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    getWeather(address){
        return http.get(`/map/weather/${address}`)
        // return http.get("https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=efbfaa1411f6beaab8e2438aa7820240")
    }
    InputPrompt(address){
        return http.get(`/map/input/${address}`)
        // return http.get("https://restapi.amap.com/v3/assistant/inputtips?output=xml&city=010&keywords=招商银行&key=efbfaa1411f6beaab8e2438aa7820240")
    }
};

export default new MapService();
