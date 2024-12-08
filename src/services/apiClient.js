import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // 后端 API 地址
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 可选：设置超时时间（单位：毫秒）
});

export default apiClient;
