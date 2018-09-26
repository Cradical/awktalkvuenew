<template>
    <div>
        <v-toolbar 
            color="#FF5F6B"
            >
            <v-toolbar-title class="white--text text-xs-center">AwkTalk</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn 
                dark 
                icon
                @click.stop="drawer = !drawer"
                >
                    <v-icon>fas fa-sliders-h</v-icon>
                </v-btn>
        </v-toolbar>
        <v-navigation-drawer
                v-model="drawer"
                right
                clipped
                absolute
                temporary
                >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://cdn.pixabay.com/photo/2017/03/27/14/09/animal-2178983_1280.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Shadowmere Preston</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 'TopNavBar',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'fas fa-home' },
          { title: 'Settings', icon: 'fas fa-cog' },
          { title: 'Log out', icon: 'fas fa-sign-out-alt' }
        ]
      }
    }
}
</script>
<style>

</style>


