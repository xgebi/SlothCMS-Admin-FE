<template>
  <div id="dashboard" class="dashboard administration">
    <authorization-checker></authorization-checker>
    <main-sidebar></main-sidebar>
    <main>
      Dashboard
    </main>
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