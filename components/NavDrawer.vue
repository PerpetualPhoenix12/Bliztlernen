<template>
    <v-card
      elevation="10"
      width="256"
      class="drawer_container"
      style="position: absolute;"
    >
      <v-navigation-drawer permanent>
        <v-list class="list">
          <nuxt-link v-for="item in topItems" :key="item.title" :to="item.url">
            <v-list-item active-class="highlighted" :class="item.url === $route.path ? 'highlighted' : ''">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>

          <v-divider class="drawer_divider" />

          <nuxt-link v-for="item in centerItems" :key="item.title" :to="item.url">
            <v-list-item active-class="highlighted" :class="item.url === $route.path ? 'highlighted' : ''">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>
          
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data () {
      return {
        topItems: [
          { title: 'Home', url: '/home', icon: 'mdi-home'},
          { title: 'Settings', url: '/settings', icon: 'mdi-settings' },
        ],
        centerItems: [
            { title: 'Folders', url: '/user/folders', icon: 'mdi-folder' },
            { title: 'Sets', url: '/user/sets', icon: 'mdi-cards' },
            { title: 'Classes', url: '/user/classes', icon: 'mdi-account-multiple'}
        ]
      }
    },
}
</script>

<style>

.drawer_container {
 /* margin-left: 10%; */
  height: 90% !important;
  z-index: 2;
}

.list {
  margin-top: 30px; 
}

.list * {
  color: #455358 !important;
  font-weight: 500;
  transition: background-color .2s;
}

.list *:hover {
  background-color: #ffcd1f;
}

.drawer_divider {
  margin-top: 40px;
  margin-bottom: 40px;
}

.highlighted {
  background-color: #ffcd1f;
}

</style>