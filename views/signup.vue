<template>
  <main>
    <Navbar class="nav" :metaLinks=navLinks />
    <v-layout justify-center align-center class="container">
      <v-card flat width="500px" color="#f3ecec">
          <v-card-title class="justify-center mb-10" style="font-size: 2.5em;">Signup</v-card-title>
            <v-card-text>
              <v-layout wrap column>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field label="Email" 
                  color="black" 
                  class="user-txt" 
                  v-model="user.email"
                  :rules="rules.required" 
                  outlined></v-text-field>

                  <v-text-field label="Avatar" 
                  color="black" 
                  class="user-txt" 
                  v-model="user.avatar"
                  :rules="rules.required" 
                  outlined></v-text-field>

                  <v-text-field label="Username" 
                  color="black" 
                  class="user-txt" 
                  v-model="user.username"
                  :rules="rules.required"
                  outlined></v-text-field>
                  
                  <v-text-field label="Password" 
                  color="black" 
                  class="password-txt" 
                  v-model="user.password"
                  :type="show ? 'text' : 'password'" 
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                  @click:append="show = !show" 
                  :rules="rules.required"
                  outlined></v-text-field>
                  </v-form>
                </v-layout>
              </v-card-text>
              

          <v-card-actions class="justify-center">
              <v-btn 
              depressed 
              color="#3ccfcf" 
              class="text-capitalize white--text signup-btn" 
              height="60px" 
              :disabled="!valid" 
              :loading="loading"
              @click="signup">
                <span class="sign">Sign up</span> 
              </v-btn>
          </v-card-actions>
          <v-card-subtitle class="text-center">
            <nuxt-link to="/login"><span class="existing">Already have an account?</span></nuxt-link>
          </v-card-subtitle>
          
      </v-card>
    </v-layout>
  </main>
</template>

<script>
import Navbar from '~/components/NavbarOut'
import { auth, db } from '~/plugins/firebase'

export default {
  data() {
    return {
      loading: false,
      show: false,
      valid: true,
      user: {
        email: '',
        password: '',
        username: '',
        avatar: ''
      },
      rules: {
          required: [ v => !!v || 'Field required' ]
      },
      navLinks: [
          { name:'Log In', url:'/login' }
      ]
    }
  },
  components: {
    Navbar
  },
  methods: {
    signup() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(result => {
          result.user.updateProfile({
            displayName: this.user.username,
            photoURL: this.user.avatar
          })
          .catch(err => {
            console.log("Signup error");
          })
          console.log(result.user);
        })
        this.loading = false;
      }
    }
  }
}
</script>

<style>
html,main{
height:100%;
 min-height:100%; 
}

.container {
  margin-top: 6% !important;
}

.nav {
  margin-bottom: 0 !important;
}

.email-txt, .user-txt, .password-txt {
  height: 80px;
  font-size: 20pt important;
}

.sign {
  font-size: 22px;
}

.signup-btn {
  transition: color .2s ease-out, background-color .2s ease-out; 
  width: 400px;
}

.signup-btn:hover {
  background-color: #ffcd1f !important;
  color: #455358 !important;
}

.existing {
  color: black !important;
}
</style>
