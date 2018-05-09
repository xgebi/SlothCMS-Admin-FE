<template>
  <div class="login-screen">
    <div class="login-dialog">
      <div v-if="loginError">
        Please check your username and password.
      </div>
      <label for="username">Username:</label>
      <input id="username" type="text" v-model="credentials.username"/>
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="credentials.password"/>
      <a>Reset password</a>
      <button v-on:click="authenticate()">Log in</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'LoginScreen',
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      },
      loginError: false
    }
  },
  computed: mapGetters([
    'token'
  ]),
  methods: {
    authenticate() {
      let status;
      fetch("../sloth-admin-api/login/", {
        body: JSON.stringify(this.credentials),
        cache: 'no-cache',
        headers: {
          'content-type' : 'application/json'
        },
        method: 'POST',
        redirect: 'follow',
        referrer: 'no-referrer'
      })
      .then((response) => {
        let token = response.headers.get('Authorization');
        if (response.status === 200 && token.length > 0) {
          token = token.split(" ");
          this.setToken(token[1]);
          this.loginError = false;
          return response.json();          
        } else {
          this.loginError = true;
        }
      })
      .then((body) => {        
        if (!this.loginError) {
          console.log(body);
          this.setName(body.name);
          this.setUsername(body.user_name);
          this.setPostTypes(body.post_types);
          this.$router.push({ name: 'Dashboard'});
        }
      });
      
    },
    ...mapMutations({
      setToken: 'setToken',
      setName: 'setName',
      setUsername: 'setUsername',
      setPostTypes: 'setPostTypes'
    })
  }
}
</script>

<style>
.login-screen {
  background: purple;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
}

.login-screen .login-dialog {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  background: white;
}
</style>
