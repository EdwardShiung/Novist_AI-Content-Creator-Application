<template>
  <div :class="{ 'nav-open': $sidebar.showSidebar }">
  <router-view/>
  </div>
</template>



<script>
//Rooted for Token Informaiton
import jwt_decode from "jwt-decode";
export default {
  name: "app",
  created() {
    if (localStorage.eleToken) {
      const decode = jwt_decode(localStorage.eleToken);
      this.$store.dispatch("setisAuthenticated", !this.isEmpty(decode));
      this.$store.dispatch("setUser", decode);
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style>
#app {
  width:100%;
  height: 100%;
}



</style>