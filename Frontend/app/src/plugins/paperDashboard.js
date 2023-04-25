import SideBar from "@/components/SidebarPlugin";
import GlobalComponents from "./globalComponents";


//css assets
import "bootstrap/dist/css/bootstrap.css";
import "../assets/sass/paper-dashboard.scss";
import "../assets/css/themify-icons.css";

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(SideBar);
  },
};
