<template>
  <v-row class="ma-0 pa-0">
    <v-col cols sm="12" xl="4" lg="4">

    </v-col>
    <v-col cols sm="12" xl="4" lg="4">
      <v-card v-show="authUser === null" class="mt-12" style="text-align: center">
        <h1>Sign-up</h1>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" rounded label="Email" autocomplete="username" type="email"
                          placeholder="Email">
            </v-text-field>
            <v-text-field v-model="password" label="Password" rounded autocomplete="password" placeholder="password"
                          type="Password">
            </v-text-field>
            <v-btn @click="$emit('user-signup',email,password)" class="ma-2" text color="">
              Register
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <h5 style="color: red">{{ this.errorSignup }}</h5>
            <v-divider></v-divider>

            <v-btn @click="$emit('google-click')" class="ma-2" text color="#de5246">
              Use Google
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-card v-show="authUser !== null" class="mt-12" style="text-align: center">

        <v-img v-if="image === 1" src="https://i.kym-cdn.com/photos/images/facebook/002/165/883/1d2.jpg"></v-img>
        <v-img v-else-if="image === 2" src="https://pbs.twimg.com/media/FCotFscWUAgQF4r.jpg"></v-img>
        <v-img v-else
               src="https://www.memeatlas.com/images/pepeThumbnails/pepe-apu-turning-into-schizo-thumbnail.png"></v-img>
        <v-spacer></v-spacer>
        <h1>Stop trying to navigate via the address bar. You're already signed in</h1>

      </v-card>
    </v-col>
    <v-col cols sm="12" xl="4" lg="4"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signup-Page",
  props: {
    authUser: {
      type: Object,
      required: true
    },
    errorSignup: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      image: 1,
      email: '',
      password: '',
    }
  },
  beforeMount() {
    this.image = Math.floor(Math.random() * 3)
  }
}
</script>

<style scoped>

</style>