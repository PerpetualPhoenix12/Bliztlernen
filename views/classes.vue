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
          <v-row>
            <v-col class="pl-12 pt-12">
              <v-card width="30%" flat>
                <v-card-title>
                  <v-icon color="black" left>mdi-account</v-icon>
                  Foreign Policy Class
                </v-card-title>
              </v-card>
            </v-col>
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

</style>
