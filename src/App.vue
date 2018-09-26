<template>
  <div id="app">
      <!-- <TopNavBar /> -->
      <router-view></router-view>
      <!-- <BottomMenu /> -->
      
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue';
import Home from './views/Home.vue';
import BottomMenu from './components/BottomMenu.vue';
import Test from './views/Test.vue';
import EventSelection from './views/EventSelection.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Signin from './views/Signin.vue'

export default {
  name: 'app',
  components: {
    TopNavBar,
    BottomMenu,
    Signin
  }
};
</script>

<style>
</style>
