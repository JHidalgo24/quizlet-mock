<template>
  <div class="text-center">
    <h1 class="text-center">Create List</h1>
    <h4>{{ this.listOfTerms.length }} terms</h4>

    <v-row class="ma-0 pa-0">
      <v-col class="text-center d-lg-none" cols sm="12">

      </v-col>
      <v-col cols lg="12" sm="12">
        <v-text-field  filled rounded class="" label="Set Title" placeholder="Set Title"></v-text-field>

        <v-btn :color="this.private.color" class="d-" outlined @click="changePrivacy">
          <span v-if="this.private.status" style="color: teal">
          Private
          </span>
          <span v-else style="color: orange">
          Public
        </span>
        </v-btn>
        <div v-for="(item,n) in listOfTerms" :key="n">
          <span class="d-block  my-4" style="text-underline: black; color: darkslategray">Term - <span
              style="color: orange">{{ item.id }}</span></span>

          <span class="d-lg-inline-flex  d-sm-inline-block">
            <v-img
                v-if="item.hasImage"
                width="60vh"
                :src="item.imageURL === '' ? 'https://ih1.redbubble.net/image.475950724.2535/st,small,507x507-pad,600x600,f8f8f8.u6.jpg': item.imageURL"
                class=""
            >
            </v-img>
            <v-card class="d-lg-none">
              <h3 class="text-center">{{ item.term === '' ? 'Term ' : item.term }}</h3>
              <v-card-text class="">{{ item.definition === '' ? 'Definition' : item.definition }}</v-card-text>
            </v-card>

          <div style="width: 100%" class="d-lg-inline-flex my-6">
            <v-text-field filled rounded v-model="item.term" :placeholder="item.term" class="mx-2" label="Term"></v-text-field>

            <v-textarea no-resize rows="4"  counter filled rounded  v-model="item.definition" :placeholder="item.definition" class="mx-2"
                          label="Definition"></v-textarea>
            <v-text-field filled rounded v-show="item.hasImage" v-model="item.imageURL" :placeholder="item.imageURL"
                          :value="item.imageURL" class="mx-2"
                          label="Image (Image Address URL)"></v-text-field>
            <v-switch v-model="item.hasImage" label="Add Image" @change="removeImage(item)">
            </v-switch>

          </div>


        </span>


        </div>
        <v-btn color="#43b3ae" fab outlined @click="createTerm">
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
      private: {status: true, color: 'orange'},
      listOfTerms: [new TermItem(1, '', '', '', false),],
      imageEnabled: false
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
    addImage(item) {
      item.hasImage = !item.hasImage
    },
    createTerm() {
      this.listOfTerms.push(new TermItem(this.listOfTerms.length + 1, '', '', 'https://ih1.redbubble.net/image.475950724.2535/st,small,507x507-pad,600x600,f8f8f8.u6.jpg'))
      console.log(this.listOfTerms)
    },
    removeImage(item) {
      item.imageURL = ''
    }
  }
}
</script>

<style scoped>

</style>