<template>
  <div>
    <authorization-checker></authorization-checker>
    <main-sidebar></main-sidebar>
    <div>
      Dashboard
    </div>
  </div>
</template>

<script>
import MainSidebar from './MainSidebar.vue'
import AuthorizationChecker from './AuthorizationChecker.vue'

export default {
  name: 'Dashboard',
  components: {
    MainSidebar,
    AuthorizationChecker
  }
}
</script>

<style>

</style>