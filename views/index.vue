<template>
  <div class="main">
    <Navbar :metaLinks=navLinks />
      <v-row justify="center" align="center">
          <div class="container-main">
            <img src="~assets/luftwaffe.svg" class="luftwaffe">
              <v-row justify="center" align="center" class="title1-wrap">
                <h1 class="title1">Learn faster than the fall of Warsaw</h1>
              </v-row>
              <v-row justify="center" align="center" class="title2-wrap">
                <h1 class="title2">Start training your mind today</h1>
              </v-row>
              <v-row justify="center" align="center">
                <nuxt-link to="/signup">
                <v-hover>
                    <v-btn height="100px" width="400px" color="#3ccfcf" class="enlist-btn white--text text-capitalize" depressed>
                      <span>Enlist now</span>
                    </v-btn>
                </v-hover>
                </nuxt-link>
                
              </v-row>
          </div>
      </v-row>
  </div>
</template>

<script>
import Navbar from '~/components/NavbarOut'

export default {
  data() {
    return {
      navLinks: [
        { name:'Log In', url:'/home'},
        { name: 'Sign Up', url:'/signup'}
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
.main {
  height: 100%;
}

.container-main {
  max-width: 75%; 
  height: 100%;
  margin-top: 4% !important;
}

.luftwaffe {
  max-height: 90%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0.1;
  z-index: 0;
}
 
.title1, .title2, .enlist-btn {
  font-family: 'Raleway';
  color: #455358;
  font-weight: 600;
  z-index: 1;
}

.title1 {
  font-size: 68px;
  margin-top: 7%;
  width: 80%;
}

.title1-wrap, .title2-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.title2 {
  font-size: 60px;
  margin-top: 4%;
}

.enlist-btn {
  margin-top: 30%;
  font-weight: bold;
  transition: color .2s ease-out, background-color .2s ease-out; 
}

.enlist-btn:hover {
  background-color: #ffcd1f !important;
  color: #455358 !important;
}

.enlist-btn > span {
  font-size: 30px;
  text-decoration: none;
}
 
@media only screen and (max-width: 1000px) {
  .title1 {
    font-size: 40px;
  }
  .title2 {
    font-size: 35px;
  }
}

</style>
