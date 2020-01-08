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
            <v-col class="pl-12">
              <v-row wrap>
              <v-card width="30%" v-for="set in sets" :key="set.title" class="mt-12 ml-12" flat>
                <v-card-title>
                  {{ set.title }}
                </v-card-title>
                <v-card-text>
                  {{ set.description }}
                </v-card-text>
              </v-card>
              </v-row>
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
import { db } from '~/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      sets: []
    }
  },
  components: {
    Navbar,
    Drawer,
    Dashboard
  },
  methods: {
    show() {
      console.log(this.sets);
    }
  },
  computed: { 
    ...mapGetters({
            userInfo: 'user/userInfo'
        }),
  },
  created() {
     db.collection('users')
     .doc(this.userInfo.uid)
     .collection('folders')
     .doc('none')
     .collection('sets')
     .get()
     .then(snapshot => {
       snapshot.forEach(doc => {
         this.sets.push(doc.data())
       })
     })
  }
}
</script>

<style>

</style>
