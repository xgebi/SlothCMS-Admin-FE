<template>
  <div class="step step-2">
    <label for="page-name">Admin username:</label>
    <input id="page-name" v-model="value.user.adminUsername" />
    <label for="page-subtitle">Admin password:</label>
    <input id="page-subtitle" v-model="value.user.adminPassword" type="password"/>
    <label for="page-name">Display name:</label>
    <input id="page-name" v-model="value.user.adminName" />
    <label for="page-name">Admin email:</label>
    <input id="page-name" v-model="value.user.adminEmail" />
  </div>
</template>

<script>
export default {
  name: 'init-wizard-step-two',
  props: [ 'value' ]
}
</script>

<style>

</style>
