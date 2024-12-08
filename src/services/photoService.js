import apiClient from "./apiClient";

const photoService = {
  getAllPhotos() {
    return apiClient.get("/photos"); // GET 请求获取所有照片
  },
  uploadPhoto(photo) {
    return apiClient.post("/photos", photo); // POST 请求上传新照片
  },
};

export default photoService;
