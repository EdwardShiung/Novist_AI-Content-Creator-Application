<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
        <sidebar-link to="/todolist" name="To-Do List" icon="ti-view-list-alt" />
        <sidebar-link
            to="/writingassistant"
            name="Writing Composition"
            icon="ti-pencil-alt2"
          />
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "../components/TopNavBar/TopNavbar.vue";
import DashboardContent from "../views/Content.vue";
export default {
  components: {
    TopNavbar,
    DashboardContent
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
