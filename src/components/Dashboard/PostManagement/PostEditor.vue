<template>
  <div>
    <authorization-checker></authorization-checker>
    <main-sidebar></main-sidebar>
    <h1>New {{ this.postType.displayName }}</h1>
    <div>
      <label for="postTypeTitle">Title: </label>
      <input id="postTypeTitle" name="postTypeTitle" v-model="content.title"/>
    </div>
    <div>
      <label for="postContent">{{ this.postType.displayName }} Content:</label>
      <textarea id="postContent" name="postContent" v-model="content.content"></textarea>
    </div>
    <div>
      <h2>Custom fields</h2>
      <div v-for="field in postType.optionalFields">
        <label>{{ field.displayName }}</label>
        <input v-if="field.type === 'text'" type="text" id="{{field.name}}" v-model="content[field.name]" />
        <input v-if="field.type === 'file'" type="file" id="{{field.name}}" v-model="content[field.name]" />
        <textarea v-if="field.type === 'textarea'" id="{{field.name}}" v-model="content[field.name]"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MainSidebar from '../MainSidebar.vue'
import AuthorizationChecker from '../AuthorizationChecker.vue'

export default {
  name: 'PostEditor',
  components: {
    MainSidebar,
    AuthorizationChecker
  },
  data() {
    return {
      postType: {},
      content: {
        title: "",
        content: ""
      }
    }
  },
  computed: mapGetters([
    'postTypes',
  ]),
  mounted() {    
    this.updatePostType();
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      this.updatePostType();
    }
  },
  methods: {
    updatePostType() {
      if (Array.isArray(this.postTypes)) {
        this.postType = this.postTypes.find((postType) => {
          return postType.name === this.$route.params.type;
        });    
      }
    },
  }
}
</script>

<style>

</style>