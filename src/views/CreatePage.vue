<template>
  <div class="text-center">
    <h1 class="text-center">Create List</h1>
    <h4>{{ this.listOfTerms.length }} terms</h4>

    <v-row class="ma-0 pa-0">
      <v-col cols sm="12" class="text-center">
        <v-text-field placeholder="Set Title" label="Set Title"></v-text-field>

        <v-btn outlined :color="this.private.color" @click="changePrivacy">

          <span v-if="this.private.status" style="color: teal">
          Private
        </span>
          <span v-else style="color: orange">
          Public
        </span>
        </v-btn>
      </v-col>
      <v-col cols sm="12">
        <div :key="n" v-for="(item,n) in listOfTerms">
          <span style="text-underline: black; color: darkslategray">Term - <span style="color: orange">{{item.id}}</span></span>

          <v-img width="50%" v-show="item.imageURL !== ''" :src="item.imageURL"></v-img>
          <span class="d-inline-flex">
          <v-text-field :placeholder="item.term" v-model="item.term" label="Term" class="mr-2"></v-text-field>
          <v-text-field  :placeholder="item.definition" v-model="item.definition" label="Definition"
                        class="ml-2"></v-text-field>
        </span>
          <v-text-field v-model="item.imageURL" :placeholder="item.imageURL" label="Image" :value="item.imageURL"></v-text-field>

        </div>
        <v-btn @click="createTerm" color="#43b3ae" outlined fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TermItem from "@/Models/TermItem";

export default {
  name: "CreatePage",
  data() {
    return {
      private: {status:true, color:'orange'},
      listOfTerms: [new TermItem(1, '', '', ''), new TermItem(2, '', '', ''), new TermItem(3, '', '', '')]
    }
  },
  methods: {
    changePrivacy() {
      this.private.status = !this.private.status
      if (this.private.color === 'orange')
        this.private.color = 'teal';
      else
        this.private.color = 'orange'
    },
    createTerm() {
      this.listOfTerms.push(new TermItem(this.listOfTerms.length + 1, '', '', ''))
      console.log(this.listOfTerms)
    }
  }
}
</script>

<style scoped>

</style>