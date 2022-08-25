<template>
  <v-app>
    <v-app-bar
        app
        color="teal"
        dark
        absolute
        elevation="3"

    >
      <router-link to="/" style="text-decoration: none; color: inherit;">Quizalt</router-link>
      <v-spacer></v-spacer>
      <v-btn to="/FAQ" text > FAQ <v-icon>mdi-frequently-asked-questions</v-icon></v-btn>

    </v-app-bar>
    <v-main>
      <router-view :errorMessage="errorMessage" @email-login="loginWithEmail" @user-signup="signUp" :authUser="authUser"
                   @logoutuser="logOut" @google-click="loginWithGoogle"></router-view>
    </v-main>

    <v-bottom-navigation app grow fixed shift v-model="value">
      <v-btn icon to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/browse-items" icon>
        <span>Browse</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-show="authUser !== null" to="/create-page" icon>
        <span>Create</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn v-show="authUser === null" to="/login-page" icon>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-show="authUser !== null" to="/account-page" icon>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-show="authUser === null" to="/signup-page" icon>
        <span>Register</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>


      <v-btn v-show="authUser !== null" to="/my-sets" icon>
        <span>My Sets</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>


    </v-bottom-navigation>
  </v-app>
</template>

<script>
import router from "@/router/router";
import {auth, firebase} from "@/firebase/firebase";
import User from "@/Models/User";



export default {
  name: 'App',
  router,
  components: {},
  methods: {
    async loginWithGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(error => {
        console.error('Unable to Sign In', error)
      }).then(router.push('/'))

    },

    async loginWithEmail(email, password) {
      await firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            this.authUser = userCredential.user;
            // ...
          })
          .catch((error) => {
            let errorMessage = error.message;
            this.errorMessage = errorMessage
          });

      if (this.authUser !== null) {
        router.push('/')
      }
    },
    async logOut() {
      await auth.signOut().then(router.push('/'))
    },
    async signUp(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            this.authUser = userCredential.user;
            // ...
          })
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + errorMessage);
          });

      if (this.authUser !== null) {
        router.push('/')
      }
    },
    outputMe(){
      console.log();
    }
  },
  data: () => ({
    authUser: null,
    value: null,
    errorMessage: ''
  }),
  beforeCreate: async function () {
    await auth.onAuthStateChanged(x => {
      if (x) {
        this.authUser = new User(x);
      } else {
        this.authUser = null
      }
    })
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

* {
  font-family: 'Silkscreen', cursive;
}
</style>
