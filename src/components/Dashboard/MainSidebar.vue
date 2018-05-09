<template>
  <ul>
    <li>{{ name }} <a v-on:click="logOut()">Log out</a></li>
    <li><router-link to="/dashboard/">Dashboard</router-link></li>
    <!-- Here will be post types -->
    <li v-for="postType in postTypes">
      <router-link to={ "/dashboard/post/list/" + postType.name}>{{ postType.displayName + "s" }}</router-link>
      <ul>
        <li><router-link to="/dashboard/post/new/postType.name">{{ "New " + postType.displayName + "s" }}</router-link></li>
      </ul>
    </li>
    <li><router-link to="/dashboard/settings/">Settings</router-link>
      <ul>
        <!-- Here will be Themes settings -->
        <!-- Here will be Content settings -->
        <!-- Here will be Users settings -->
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'main-sidebar',
  computed: mapGetters([
    'name',
    'username',
    'postTypes',
    'token'
  ]),
  mounted: function () {
    console.log(this.postTypes);
  },
  methods: {
    logOut() {
      let status;
      let user = {
        username: this.username,
        token: this.token
      }
      console.log(user, this.$store);
      fetch("../sloth-admin-api/logout/", {
        body: JSON.stringify(user),
        cache: 'no-cache',
        headers: {
          'content-type' : 'application/json'
        },
        method: 'PUT',
        redirect: 'follow',
        referrer: 'no-referrer'
      })
      .then((response) => {
        this.$router.push({ name: 'LoginScreen'});
      });
      
    }
  }
}
</script>

<style>

</style>