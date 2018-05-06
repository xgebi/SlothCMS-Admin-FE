<template>
  <div>    
  </div>
</template>

<script>

export default {  
  name: 'Template',
  computed: mapGetters([
    'getUserName',
    'getToken'
  ]),
  mounted: function () {
    if (this.getUserName.length === 0 || this.getToken.length === 0) {
      this.$router.push({ name: 'LoginScreen'});
    } else {
      //setInterval
    }
  }
}
</script>

<style>

</style>