<template>
  <form
		@submit.prevent="onSubmit"
		class="w-full bg-white rounded-lg shadow-lg text-grayDark px-6 pt-4 pb-6"
		novalidate
	>
    <InputField
      label="Container max width"
			:value="form.containerWidth"
			ref="containerWidth"
			:required="true"
			:error="isSubmitted"
    />

    <InputField
      label="Columns"
      type="number"
      :value="form.columns"
			ref="columns"
			:required="true"
			:error="isSubmitted"
    />

    <InputField
      label="Gap"
      :value="form.gap"
			ref="gap"
			:required="true"
			:error="isSubmitted"
    />

    Breakpoints

    <button
			type="submit"
			class="btn font-light feedback"
			:class="
				isValid()
					? 'bg-greenTurq'
					: 'bg-gray-400 feedback-error'
			"
		>
			Generate
		</button>
  </form>
</template>

<script>
import InputField from '@/components/form/InputField'
import { validateForm } from '@/helpers/validation'

export default {
  name: 'SettingsForm',
  components: {
		InputField
	},
  props: {
		settings: {
			type: Object,
			required: false,
			default: () => {}
		},
  },
  data: () => {
    return {
      form: {
        containerWidth: '',
        columns: null,
        gap: ''
      },
      isSubmitted: false
    }
  },
	created() {
			this.form = this.settings
	},
	methods: {
		onSubmit() {
			this.isSubmitted = true
			if (!this.isValid()) return false
      console.log(this.form)
			this.$store.dispatch('updateStore', this.form)
			//this.$emit('close')
		},
		isValid() {
			return validateForm(this.$refs)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
