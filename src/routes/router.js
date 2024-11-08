import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if(!['login','register','password-recovery','password-reset'].includes(to.name)){
    const authData = JSON.parse(localStorage.getItem('authData'));
    if(authData && authData.token){
      return next();
    }
  
    window.location.href = '/login'
  }
  next();
})
export default router;
