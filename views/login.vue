<template>
  <main>
    <Navbar class="nav" :metaLinks=navLinks />
    <v-layout justify-center align-center class="container">
      <v-card flat width="500px" color="#f3ecec">
          <v-card-title class="justify-center mb-10" style="font-size: 2.5em;">Login</v-card-title>
            <v-card-text>
              <v-layout wrap column>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field label="Email" 
                  color="black" 
                  class="user-txt" 
                  :rules="rules.required" 
                  v-model="user.email"
                  outlined></v-text-field>

                  <v-text-field label="Password" 
                  color="black" 
                  class="password-txt" 
                  :type="show ? 'text' : 'password'" 
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                  @click:append="show = !show" 
                  :rules="rules.required"
                  v-model="user.password"
                  outlined></v-text-field>
                </v-form>
              </v-layout>
            </v-card-text>

          <v-card-actions class="justify-center">
              <v-btn 
              depressed 
              @click="login()" 
              color="#3ccfcf" 
              class="text-capitalize white--text log-btn" 
              height="60px" 
              :disabled="!valid"
              :loading="loading">
                <span class="log">Log in</span>
              </v-btn>
          </v-card-actions>
          <v-card-subtitle class="text-center">
            <nuxt-link to="/signup"><span class="existing">Don't have an account?</span></nuxt-link>
          </v-card-subtitle>
      </v-card>
    </v-layout>
  </main>
</template>

<script>
import Navbar from '~/components/NavbarOut'
import { auth } from '~/plugins/firebase'

export default {
  data() {
    return {
      show: false,
      valid: true,
      loading: false,
      user: {
        email: '',
        password: ''
      },
      rules: {
          required: [ v => !!v || 'Field required' ]
      },
      navLinks: [
          { name:'Sign up', url:'/signup' }
      ]
    }
  },
  components: {
    Navbar
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          console.log("Signed in")
        })
        .catch(error => console.log(error.message))
        this.loading = false;
      }
    }
  }
}
</script>

<style>
html,main{
height:100%;
}

.container {
  margin-top: 6% !important;
}

.nav {
  margin-bottom: 0 !important;
}

.user-txt, .password-txt {
  height: 80px;
  font-size: 20pt important;
}


.log {
  font-size: 22px;
}

.log-btn {
  transition: color .2s ease-out, background-color .2s ease-out; 
  width: 400px;
}

.log-btn:hover {
  background-color: #ffcd1f !important;
  color: #455358 !important;
}

.existing {
  color: black !important;
  text-decoration: none;
}
</style>
