<template>
  <div id="post-type-list" class="post-type-list administration">
    <authorization-checker></authorization-checker>
    <main-sidebar v-bind:section="type"></main-sidebar>
    <main>
      PostList
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MainSidebar from '../MainSidebar.vue'
import AuthorizationChecker from '../AuthorizationChecker.vue'

export default {
  name: 'PostList',
  components: {
    MainSidebar,
    AuthorizationChecker
  },
  props: {
    type: {
      required: true
    }
  }
}
</script>

<style>

</style>