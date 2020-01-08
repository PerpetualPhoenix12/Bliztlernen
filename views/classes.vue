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
          <Dashboard />
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
