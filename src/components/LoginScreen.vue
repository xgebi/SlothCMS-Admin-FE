<template>
  <div class="wizard">
    <div>
      <div v-if="loginError">
        Please check your username and password.
      </div>
      <div>
        <label for="username">Username:</label>
      </div>
      <div>
        <input id="username" type="text" v-model="credentials.username"/>
      </div>
      <div>
        <label for="password">Password:</label>
      </div>
      <div>
        <input id="password" type="password" v-model="credentials.password"/>
      </div>
      <div>
        <a>Reset password</a>
      </div>
      <div>
        <button v-on:click="authenticate()">Log in</button>
      </div>
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
