<template>
<<<<<<< HEAD
<div>
  <TopNavBar />
    <v-flex xs12 sm6 offset-sm3>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card>
                <v-img
                  :src="card.src"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
    </v-flex>
    </div>
</template>
<script>
import TopNavBar from '../components/TopNavBar';
export default {
  name: 'EventSelection',
  components: {
    TopNavBar
  },
  data: () => ({
    cards: [
      {
        title: 'Networking',
        src:
          'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg',
        flex: 6
      },
      {
        title: 'Party',
        src:
          'https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_1280.jpg',
        flex: 6
      }
    ]
  })
};
=======
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
>>>>>>> 0e35406460a86e86dac8b256f74d6322e7933363
</script>
<style>
</style>

