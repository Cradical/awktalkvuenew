<template>
  <div id="app">
      <TopNavBar />
      <Home />
      <BottomMenu />
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue';
import Home from './components/Home.vue';
import BottomMenu from './components/BottomMenu.vue';
import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

export default {
  name: 'app',
  components: {
    TopNavBar,
    Home,
    BottomMenu,
  }

}
</script>

<style>

</style>
