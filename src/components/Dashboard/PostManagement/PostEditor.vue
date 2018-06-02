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
        <input v-if="field.type === 'text'" type="text" :id="field.name" v-model="content.custom[field.name]" />
        <!--<input v-if="field.type === 'file'" type="file" :id="field.name" v-on:change="content.custom[field.name]" />-->
        <textarea v-if="field.type === 'textarea'" :id="field.name" v-model="content.custom[field.name]"></textarea>
      </div>
    </div>
    <div>
      <button type="submit" v-on:click="savePost()">{{ saveButton }}</button>
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
      saveButton: "Publish",
      postType: {},
      content: {
        title: "",
        content: "",
        custom: {}
      }
    }
  },
  computed: mapGetters([
    'postTypes',
    'username',
    'token'
  ]),
  mounted() {    
    this.updateEditor();
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      this.updateEditor();
    }
  },
  methods: {
    updateEditor() {
      if (Array.isArray(this.postTypes)) {
        this.postType = this.postTypes.find((postType) => {
          return postType.name === this.$route.params.type;
        });    
      }
      if (this.content.publishedDate) {
        saveButton = "Schedule";
      } else {
        if (this.$route.fullPath.endsWith("/new")) {
          this.saveButton = "Publish";
        } else {
          this.saveButton = "Update";
        }          
      }    
      if (!this.$route.fullPath.endsWith("/new")) {
        fetch("../sloth-admin-api/post/", {
          cache: 'no-cache',
          headers: {
            'Authorization' : this.username + ' ' + this.token,
          },
          method: 'GET',
          redirect: 'follow',
          referrer: 'no-referrer'
        })
        .then((response) => {
          status = response.status;          
          return response.json();          
        })
        .then((data) => {
          if (status === 200) {
            this.content = data;
          }
        });  
      }       
    },
    savePost() {
      let status;      
      if (this.$route.fullPath.endsWith("/new")) {
        fetch("../sloth-admin-api/post/", {
          cache: 'no-cache',
          body: JSON.stringify(this.content),
          headers: {
            'content-type' : 'application/json',
            'Authorization' : this.username + ' ' + this.token,
          },
          method: 'POST',
          redirect: 'follow',
          referrer: 'no-referrer'
        })
        .then((response) => {
          status = response.status;          
          return response.json();          
        })
        .then((data) => {
          if (status === 201) {
            console.log(data);
            this.$router.push({ 
              name: 'EditPost', 
              params: { 
                type: this.$route.params.type,
                slug: data.slug
              }
            });
            this.errorSaving = false;
          } else {
            this.errorSaving = true;
          }
        });  
      } else {
        fetch("../sloth-admin-api/post/"+this.content.slug, {
          cache: 'no-cache',
          body: JSON.stringify(this.content),
          headers: {
            'content-type' : 'application/json',
            'Authorization' : this.username + ' ' + this.token,
          },
          method: 'PUT',
          redirect: 'follow',
          referrer: 'no-referrer'
        })
        .then((response) => {
          if (response.status === 200) {
            this.errorSaving = false;
          } else {
            this.errorSaving = true;
          }
        }); 
      }
    }
  }
}
</script>

<style>

</style>