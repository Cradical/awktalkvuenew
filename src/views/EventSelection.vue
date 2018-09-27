<template>
  <div>
    <TopNavBar />
    <BottomMenu />

    <div class="text-xs-center">
    <v-btn large outline color="black">Networking</v-btn>
    <v-btn large outline color="black">Party</v-btn>
  </div>
    
  </div>
</template>
<script>
import TopNavBar from '../components/TopNavBar.vue';
import BottomMenu from '../components/BottomMenu.vue';
export default {
    name: 'EventSelection',
    components: {
      TopNavBar,
      BottomMenu
    }
}
</script>
<style>

</style>

