<template>
  <div class="step step-1">
    <label for="page-name">Web site name:</label>
    <input id="page-name" v-model="value.website.sitename" />
    <label for="page-subtitle">Web site sub title:</label>
    <input id="page-subtitle" v-model="value.website.subtitle" />
    <label for="page-name">Main language:</label>
    <input id="page-name" v-model="value.website.language" />
    <label for="page-subtitle">Date format:</label>
    <input id="page-subtitle" v-model="value.website.dateFormat" />
    <label for="page-subtitle">Time zone:</label>
    <input id="page-subtitle" v-model="value.website.timezone" />
  </div>
</template>

<script>
export default {
  name: 'init-wizard-step-one',
  props: [ 'value' ]
}
</script>

<style>

</style>
