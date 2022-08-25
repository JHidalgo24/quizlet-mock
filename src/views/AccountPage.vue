<template>
  <div style="text-align: center">
    <h1>Account info</h1>

    <v-btn @click="$emit('logoutuser')">
      log-out
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AccountPage"
}
</script>

<style scoped>

</style>