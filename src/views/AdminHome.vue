<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <div class="image-grid">
      <div class="image-item" v-for="(image, index) in images" :key="index">
        <div class="image">
          <img :src="image" alt="图片" />
          <div class="image-content">
            <h1>图片 标题 {{ index + 1 }}</h1>
            <div class="icons">
              <!-- Replace three icons with a single trash can icon -->
              <a href="#" class="icon fas fa-trash-alt"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "/img/i1.jpg",
        "/img/i2.jpg",
        "/img/i3.jpg",
        "/img/i4.jpg",
        "/img/i5.jpg",
        "/img/i6.jpg",
        "/img/i7.jpg",
        "/img/i8.jpg",
        "/img/i9.jpg",
      ],
    };
  },
};
</script>

<style scoped>
/* Home layout styles */
.home {
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh;
  overflow-y: hidden; /* 默认隐藏滚动条 */
  position: relative;
}

/* 鼠标悬停时显示滚动条 */
.home:hover {
  overflow-y: auto; /* 恢复滚动功能 */
}

/* 滚动条样式 */
.home::-webkit-scrollbar {
  width: 8px; /* 滚动条宽度 */
  background: transparent; /* 默认背景透明 */
}

.home:hover::-webkit-scrollbar {
  background: #e0e0e0; /* 鼠标悬停时显示背景 */
}

.home::-webkit-scrollbar-thumb {
  background: #888; /* 滑块颜色 */
  border-radius: 4px;
}

.home:hover::-webkit-scrollbar-thumb {
  background: #555; /* 鼠标悬停时滑块颜色 */
}

h1 {
  text-align: center;
  color: #333;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列布局 */
  gap: 10px;
}

.image-item {
  overflow: hidden;
  cursor: pointer;
}

/* Image hover effect styles */
.image {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease-in-out;
}

.image:hover img {
  transform: scale(1.1); /* 放大效果 */
}

.image-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5); /* 背景遮罩 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
}

.image:hover .image-content {
  transform: translateY(0); /* 内容上滑显示 */
}

.image-content h1 {
  color: #fff;
  text-transform: uppercase;
  transform: translateY(20px);
  transition: transform 0.4s;
}

.image:hover .image-content h1 {
  transform: translateY(0);
}

.icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.icon {
  text-decoration: none;
  color: #fff;
  font-size: 32px; /* Adjust the size of the trash can icon */
  transition: transform 0.4s ease-in-out, color 0.4s;
}

.image:hover .icon {
  transform: translateY(0);
}

.icon:hover {
  color: #e74c3c; /* Change color on hover */
}

.image-content::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 0px;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  transition: 0.5s;
}

.image:hover .image-content::before {
  height: 140px;
}
</style>
