<template>
  <div class="wizard">
    <div>
      First run checker
    </div>
  </div>
</template>

<script>
//import Conf from '../conf.js';

export default {
  name: 'FirstRunChecker',
  mounted() {
    this.findConfFile()
  },
  data() {
    return {
      firstRun: true,
    }
  },
  methods: {
    findConfFile() {      
      let status;
      fetch("../sloth-admin-api/config/")
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((data) => {           
          if (status === 404) {
            this.$router.push({ name: 'InitWizard', params: { confFileProperties: data } });
          } else {
            this.$router.push({ name: 'LoginScreen'});
          }
        })                
    }
  },
}
</script>