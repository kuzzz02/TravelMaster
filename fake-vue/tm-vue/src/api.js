import axios from "axios";

const http = axios.create({
  baseURL:"/api",
  timeout:10000,
  headers: {
    "Content-type": "application/json"
  }
})
export default http;