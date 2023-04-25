<template>
    <div class="wrapper">
      <side-bar>
        <template slot="links">
          <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
          <sidebar-link to="/stats" name="To-Do List" icon="ti-view-list-alt" />
          <sidebar-link
            to="/table-list"
            name="Writing Composition"
            icon="ti-pencil-alt2"
          />
        </template>

      </side-bar>
      <div class="main-panel">
        <top-navbar></top-navbar>
      </div>
    </div>
  </template>
  <style lang="scss"></style>
  <script>
  import TopNavbar from "../components/TopNavBar/TopNavbar.vue";

  export default {
    components: {
      TopNavbar,
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
