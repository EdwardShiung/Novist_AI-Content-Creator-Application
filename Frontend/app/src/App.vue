<template>
  <div :class="{ 'nav-open': $sidebar.showSidebar }">
  <router-view/>
  </div>
</template>



<script>
export default {};
</script>

<style>
#app {
  width:100%;
  height: 100%;
}



</style>