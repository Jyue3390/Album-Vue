<template>
  <div id="app">
    <!-- 显示当前路由页面 -->
    <router-view />
  </div>
</template>

<script>
// 删除 LoginPage 引入，因为 vue-router 会自动根据当前路由渲染组件
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  overflow-y: hidden; /* 默认隐藏滚动条 */
  background: black;
}
</style>
