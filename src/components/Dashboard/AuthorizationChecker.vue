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
        let interval = window.setInterval(() => {
          fetch("../sloth-admin-api/loggedIn/", {
            cache: 'no-cache',
            headers: {
              'Authorization' : this.username + ' ' + this.token,
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