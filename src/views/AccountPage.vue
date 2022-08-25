<template>
  <div v-show="authUser !== null" style="text-align: center">
    <v-row>
      <v-col cols sm="12" lg="4">

      </v-col>
      <v-col style="justify-content: center" cols sm="12" lg="4">
        <v-card class="justify-center pa-2">
            <h2 style="" class="pa-4">Account info</h2>
            <v-img :src="authUser.photoURL"></v-img>
            <v-card-text>
              <h3>{{ authUser.displayName }}</h3>
              <h4>Sets: 0</h4>
            </v-card-text>
            <v-spacer></v-spacer>
          <v-card-actions class="card-actions">
            <v-btn @click="$emit('logoutuser')">
              log-out
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols sm="12" lg="4">

      </v-col>
    </v-row>


  </div>
</template>

<script>
export default {
  name: "AccountPage",
  props: {
    authUser: {
      required: true,
      type: Object
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>