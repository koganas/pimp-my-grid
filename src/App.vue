<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <SettingsForm :settings="settings" />
  <GridPreview />
</template>

<script>
import SettingsForm from './components/SettingsForm.vue'
import GridPreview from './components/GridPreview.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    SettingsForm,
    GridPreview
  },
	computed: {
		...mapState({
			settings: (state) => state.gridSettings
		})
	},
}
</script>
