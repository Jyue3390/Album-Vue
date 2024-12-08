import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import Album from '../components/Album.vue';
import Settings from "../views/Settings.vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import AlbumDetail from '@/views/AlbumDetail.vue'
import Admin from '@/components/Admin.vue'

const routes = [
  { path: "/", component: Login },
  { path: "/album", component: Album },
  { path: "/admin", component: Admin },
  { path: "/home", component: Home },
  { path: "/settings", component: Settings },
  { path: "/profile", component: Profile },
  { path: '/album/:albumId', name: 'AlbumDetail', component: AlbumDetail },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
