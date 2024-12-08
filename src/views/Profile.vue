<template>
  <div class="profile">
    <button @click="createAlbum" class="create-album-btn">新建相册</button>

    <!-- Display albums -->
    <div class="album-grid">
      <div
        v-for="(album, index) in albums"
        :key="index"
        class="album-item"
        @click="goToAlbumDetail(album.id)"
      >
        <div class="album-cover">
          <img :src="album.coverImage || (album.images.length > 0 ? album.images[0] : '/img/placeholder.jpg')" alt="Album Cover" />
        </div>
        <h3>{{ album.name }}</h3>
      </div>
    </div>

    <!-- New Album Form Modal -->
    <div v-if="showNewAlbumForm" class="modal-overlay">
      <div class="modal-content">
        <h2>创建新相册</h2>
        <input type="text" v-model="newAlbum.name" placeholder="相册名称" />
        <input type="text" v-model="newAlbum.type" placeholder="相册类型" />
        <div class="button-container">
          <button @click="saveAlbum" class="save-btn">保存</button>
          <button @click="cancelAlbum" class="cancel-btn">取消</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      albums: [], // 存储相册数据
      showNewAlbumForm: false, // 控制新建相册表单显示
      newAlbum: { name: "", type: "", coverImage: "", images: [] }, // 新建相册的数据
    };
  },
  created() {
    const storedAlbums = JSON.parse(localStorage.getItem("albums")) || [];
    this.albums = storedAlbums;
  },
  methods: {
    createAlbum() {
      this.showNewAlbumForm = true;
    },
    saveAlbum() {
      if (this.newAlbum.name && this.newAlbum.type) {
        const newAlbumData = {
          ...this.newAlbum,
          id: Date.now(),  // 给每个相册一个唯一的 ID
          coverImage: '',  // 初始封面为空
          images: [] // 新相册初始没有图片
        };

        // 保存到本地存储
        const existingAlbums = JSON.parse(localStorage.getItem("albums")) || [];
        existingAlbums.push(newAlbumData);
        localStorage.setItem("albums", JSON.stringify(existingAlbums));

        // 更新相册列表
        this.albums.push(newAlbumData);
        this.newAlbum = { name: "", type: "", coverImage: "", images: [] }; // 重置新相册数据
        this.showNewAlbumForm = false; // 关闭表单
      } else {
        alert("请填写相册名称和类型");
      }
    },
    cancelAlbum() {
      this.showNewAlbumForm = false;
    },
    goToAlbumDetail(albumId) {
      this.$router.push(`/album/${albumId}`);
    },
  },
};
</script>

<style scoped>
.profile {
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.create-album-btn {
  display: block;
  width: 100%;
  max-width: 250px;
  margin: 20px auto;
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-album-btn:hover {
  background-color: #2980b9;
}

.album-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  flex-grow: 1;
}

.album-item {
  position: relative;
  cursor: pointer;
}

.album-cover {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.album-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  text-align: center;
  color: #0E0101FF;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 320px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #4CAF50;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-btn, .cancel-btn {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.save-btn {
  background-color: #4CAF50;
  color: white;
}

.save-btn:hover {
  background-color: #45a049;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
}

.cancel-btn:hover {
  background-color: #e53935;
}

</style>
