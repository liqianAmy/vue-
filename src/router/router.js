import App from "../js/app";
import home from "../components/home";
import login from "../components/login";


export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children:[
      {
        path:'/home',
        component:home
      },
      {
        path:'/login',
        component:login
      }
    ]
}
];
