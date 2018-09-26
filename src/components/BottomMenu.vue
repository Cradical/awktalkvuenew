<template>
    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      absolute
      height="75"
      color="#fdf5e6"
    >
      <v-btn flat color="black">
        <span>Favorites</span>
        <v-icon>fas fa-heart</v-icon>
      </v-btn>
        
      <v-btn flat color="black">
        <span>Notes</span>
        <v-icon>fas fa-sticky-note</v-icon>
      </v-btn>

      <v-btn flat color="black">
        <span>Profile</span>
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>
<script>
export default {
    name: 'BottomMenu',
    data () {
      return {
        activeBtn: 1,
        showNav: true,
      }
    }
}
</script>
<style>

</style>