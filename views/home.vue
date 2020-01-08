<template>
  <div style="height:100%;">
    <Navbar />
      <v-row no-gutters> 
        <v-col cols="3">
          <v-layout justify-end>
            <Drawer />
          </v-layout>
        </v-col>
        <v-col> 
          <v-row>
            <Dashboard />
          </v-row>
          <v-row class="ma-12">
            <v-card width="35%" flat>
              <v-row justify="center" class="ma-12">
                <span class="welcome">Welcome!</span>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import Navbar from '~/components/NavbarIn'
import Drawer from '~/components/NavDrawer'
import Dashboard from '~/components/DashboardHeader'

export default {
  components: {
    Navbar,
    Drawer,
    Dashboard
  }
}
</script>

<style>

.welcome {
  font-size: 30px;
  color:  #455358;
  font-weight: 600;
}

</style>
