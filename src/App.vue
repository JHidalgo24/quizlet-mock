<template>
  <v-app>
    <v-app-bar
        app
        color="teal"
        dark
    >
      <h1 to="/">Quizalt</h1>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-magnify</v-icon> &nbsp;Browse
      </v-btn>
      <v-btn text>
        <v-icon>mdi-plus</v-icon> &nbsp;create
      </v-btn>
      <v-btn text>
        <v-icon>mdi-account-plus</v-icon> &nbsp;Register
      </v-btn>
      <v-btn text>
        <v-icon>mdi-account</v-icon> &nbsp;Login
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
export default {
  name: 'App',
  router,
  components: {},

  data: () => ({
    //
  }),
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

* {
  font-family: 'Silkscreen', cursive;
}
</style>
