<template>
  <div>
    <authorization-checker></authorization-checker>
    <main-sidebar></main-sidebar>
      Settings
  </div>
</template>

<script>
import MainSidebar from './MainSidebar.vue'
import AuthorizationChecker from './AuthorizationChecker.vue'

export default {
  name: 'Settings',
  components: {
    MainSidebar,
    AuthorizationChecker
  }
}
</script>

<style>

</style>