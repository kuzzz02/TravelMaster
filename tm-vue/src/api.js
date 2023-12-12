import axios from "axios";

const http = axios.create({
  baseURL:"/api",
  // timeout:1000,
  headers: {
    "Content-type": "application/json"
  }
})
export default http;