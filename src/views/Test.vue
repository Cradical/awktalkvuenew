<template>
  <div>
    <TopNavBar />
    <h1>I'm Test.vue asdfadfasfdlasdfkjals;dfkjaldfskjalfjas</h1>
    <BottomMenu />
  </div>
</template>
<script>
import BottomMenu from '../components/BottomMenu';
import TopNavBar from '../components/TopNavBar';
export default {
  name: 'Test',
  components: {
    BottomMenu,
    TopNavBar
  }
};
</script>
<style>
</style>
