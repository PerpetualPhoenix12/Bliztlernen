<template>
<v-app>
  <div class="main">
    <nuxt class="pb-12" />
  </div>
  
</v-app>
</template>

<script>
import { auth } from '~/plugins/firebase'

export default {
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(`User is logged in as ${user.email}`);
        this.$store.commit('user/setUser', user);
      }
      else {
        console.log("User is not logged in.");
      }
    })
  }
}
</script>


<style>
html {
  font-family: 'Raleway', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  background-color: #f3ecec;
}

a {
  text-decoration: none;
}

</style>
