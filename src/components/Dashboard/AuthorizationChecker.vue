<template>
  <div>    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {  
  name: 'authorization-checker',
  computed: mapGetters([
    'username',
    'token',
    'keepAliveIntervalID'
  ]),
  mounted: function () {
    if (this.username.length === 0 || this.token.length === 0) {
      this.$router.push({ name: 'LoginScreen'});
    } else {
      if (this.keepAliveIntervalID.length === 0) {
        let user = {
          username: this.username,
          token: this.token
        };
        let interval = window.setInterval(() => {
          fetch("../sloth-admin-api/loggedIn/", {
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
            if (response.status !== 200) {
              clearInterval(interval);
              this.setKeepAliveIntervalID("");
              this.$router.push({ name: 'LoginScreen'});
            }
          });
        }, 60000);
        this.setKeepAliveIntervalID(interval);
      }
    }
  },
  methods: {
  ...mapMutations({
      setKeepAliveIntervalID: 'setKeepAliveIntervalID'
    })
  }
}
</script>

<style>

</style>