<template>
  <div class="wizard">
    <div class="dialog">
      <div v-if="confFileProperties.notWritable">
        You need to change permissions on your filesystem.
      </div>
      <div v-if="savingConfigFileError">
        Error occured while writing config file.
      </div>
      <init-wizard-step-one 
          v-if="currentStep === 1" 
          v-model="confFileState" 
          v-bind:timezones="confFileProperties.timeZones"
      ></init-wizard-step-one>
      <init-wizard-step-two v-if="currentStep === 2" v-model="confFileState"></init-wizard-step-two>
      <init-wizard-step-three v-if="currentStep === 3" v-model="confFileState"></init-wizard-step-three>
      <button 
        v-if="currentStep !== 3" 
        v-bind:disabled="currentStep === 1"
        v-on:click="currentStep--"
      >Previous</button>
      <button 
        v-if="currentStep < 2"
        v-on:click="currentStep++"
      >Next</button>
      <button 
        v-if="currentStep === 2"
        v-on:click="saveConfigFile()"
      >Finish</button>
      <button 
        class="wizard-login-button"
        v-if="currentStep === 3"
        v-on:click="$router.push({ name: 'LoginScreen'})"
      >Log in</button>
    </div>
  </div>
</template>

<script>
import InitWizardStepOne from './InitWizardStepOne.vue';
import InitWizardStepTwo from './InitWizardStepTwo.vue';
import InitWizardStepThree from './InitWizardStepThree.vue';
import InitWizardStepFour from './InitWizardStepFour.vue';

export default {
  name: 'InitWizard',
  props: [ 'confFileProperties' ],
  data() {
    return {
      currentStep: 1,
      confFileState: {
        user: {},
        website: {
          timezone: this.confFileProperties.defaultTimeZone
        },

      },
      savingConfigFileError: false
    }
  },
  components: {
    InitWizardStepOne,
    InitWizardStepTwo,
    InitWizardStepThree
  },
  methods: {
    saveConfigFile() {
      let status;
      fetch("../sloth-admin-api/config-file/", {
        body: JSON.stringify(this.confFileState),
        cache: 'no-cache',
        headers: {
          'content-type' : 'application/json'
        },
        method: 'POST',
        redirect: 'follow',
        referrer: 'no-referrer'
      })
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((data) => {
        if (status === 201) {
          this.currentStep++;
          this.savingConfigFileError = false;
        } else {
          this.savingConfigFileError = true;
          this.currentStep = 1;
        }
      });
      
    }
  }
}
</script>