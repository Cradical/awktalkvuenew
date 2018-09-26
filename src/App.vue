<template>
  <div id="app">
      <TopNavBar />
      <router-view></router-view>
      <!-- <Home /> -->
      <BottomMenu />
      
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue';
import Home from './components/Home.vue';
import BottomMenu from './components/BottomMenu.vue';
import Test from './views/Test.vue';
import EventSelection from './views/EventSelection.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

export default {
  name: 'app',
  components: {
    TopNavBar,
    BottomMenu
  }
};
</script>

<style>
</style>
