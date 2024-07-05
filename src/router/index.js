import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Home from '../components/Home.vue';
import Profile from '../views/Settings/Profile.vue';
import Scriptures from '../views/Scriptures/Scriptures.vue';
import Insights from '../views/Insights/Insights.vue';
import Prayers from '../views/Prayer/Prayers.vue';
import Events from '../views/Events/Events.vue';
import Groups from '../views/Chat/Groups.vue';
import Settings from '../views/Settings/Settings.vue';
import Logout from '../views/Settings/Logout.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';



const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'profile', component: Profile },
      { path: 'scriptures', component: Scriptures },
      { path: 'insights', component: Insights },
      { path: 'prayers', component: Prayers },
      { path: 'events', component: Events },
      { path: 'groups', component: Groups },
      { path: 'settings', component: Settings },
      { path: 'logout', component: Logout },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
