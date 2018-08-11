<template>
  <header id="sidebar">
    <div class="user-loggedin">
      <span>{{ name }}</span>
      <button v-on:click="logOut()" class="logout-button">Log out</button>
    </div>
    <nav>
    <ul>
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
    </nav>
  </header>
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