<template>
  <ul>
    <li>{{ getName }} <a v-on:click="logOut()">Log out</a></li>
    <li><router-link to="/dashboard/">Dashboard</router-link></li>
    <!-- Here will be post types -->
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
    'getName',
    'getUserName',
    'getPostTypes',
    'getToken'
  ]),
  methods: {
    logOut() {
      let status;
      let user = {
        username: this.getUserName,
        token: this.getToken
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