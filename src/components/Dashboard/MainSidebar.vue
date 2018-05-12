<template>
  <ul>
    <li>{{ name }} <a v-on:click="logOut()">Log out</a></li>
    <li><router-link to="/dashboard/">Dashboard</router-link></li>
    <!-- Here will be post types -->
    <li v-for="postType in postTypes">
      <router-link :to="{ name: 'PostList', params: { type: postType.name }}">{{ postType.displayName + "s" }}</router-link>
      <ul>
        <li><router-link :to="{ name: 'AddPost', params: { type: postType.name }}">{{ "New " + postType.displayName + "s" }}</router-link></li>
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
  methods: {
    logOut() {
      let status;      
      fetch("../sloth-admin-api/logout/", {
        cache: 'no-cache',
        headers: {
          'Authorization' : this.username + ' ' + this.token,
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