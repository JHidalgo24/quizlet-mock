<template>
  <v-app>
    <v-app-bar
        app
        color="teal"
        dark
        absolute
        elevation="3"

    >
      <h1>Quizalt</h1>
      <v-spacer></v-spacer>




    </v-app-bar>
    <v-main>
      <router-view></router-view>
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
      <v-btn to="/create-page" icon>
        <span>Create</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn to="/login-page" icon>
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/signup-page" icon>
        <span>Register</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
import router from "@/router/router";

export default {
  name: 'App',
  router,
  components: {},

  data: () => ({
  }),
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

* {
  font-family: 'Silkscreen', cursive;
}
</style>
