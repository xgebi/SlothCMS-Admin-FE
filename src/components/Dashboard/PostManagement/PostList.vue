<template>
  <div>
    <authorization-checker></authorization-checker>
    <main-sidebar></main-sidebar>
    PostList
  </div>
</template>

<script>
import MainSidebar from '../MainSidebar.vue'
import AuthorizationChecker from '../AuthorizationChecker.vue'

export default {
  name: 'PostList',
  components: {
    MainSidebar,
    AuthorizationChecker
  },
}
</script>

<style>

</style>