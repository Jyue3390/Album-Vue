<template>
  <div>
    <!-- 导航栏 -->
    <div class="navbar">
      <button v-for="(item, index) in navbarItems" :key="index" @click="changePage(index)">
        {{ item }}
      </button>
    </div>

    <!-- 页面内容 -->
    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import Home from "../views/AdminHome.vue"; // 引入首页组件
import Settings from "../views/Settings.vue"; // 引入设置页面
import Profile from "../views/Profile.vue"; // 引入我的页面

export default {
  data() {
    return {
      navbarItems: ["首页","设置","管理员模式"],
      currentPage: 0,
      components: [Home,Settings, Profile,0], // 注册组件
    };
  },
  computed: {
    currentComponent() {
      return this.components[this.currentPage] || "div";
    },
  },
  methods: {
    changePage(index) {
      this.currentPage = index;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start; /* 左对齐 */
  gap: 10px; /* 按钮之间的间距 */
  background-color: #b2daf6;
  padding: 5px;
}

.navbar button {
  color: white;
  background-color: #b2daf6;
  border: none;
  padding: 10px 15px; /* 按钮内边距 */
  cursor: pointer;
}

.navbar button:hover {
  background-color: #a6fafd;
}

.content {
  padding: 0;
  background-color: #f0f0f0;
  height: 100vh;
  overflow: hidden; /* 保持布局一致性 */
}
</style>
