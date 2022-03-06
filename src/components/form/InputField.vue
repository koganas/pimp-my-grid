<template>
	<label class="input-group">
		<p class="label">
			{{ label }}
			<span v-if="required" class="text-grayLight">*</span>
		</p>
		<input
			:type="type"
			:placeholder="placeholder"
			:value="value"
			:id="label"
			:ref="label"
			class="transition-all duration-200 input border-grayDark outline-none"
			:class="{
				'focus:border-greenTurq': !hasError || !error,
				'border-pinkPanther': showError,
				'text-base py-1.6': label === 'Title'
			}"
			@input="updateField"
			v-mask="inputMask"
		/>
		<template v-if="showError">
			<p class="text-xs text-pinkPanther mt-1">
				{{ message }}
			</p>
		</template>
	</label>
</template>

<script>
import { validateEmail, theMask as _mask } from '@/helpers/validation'

export default {
	name: 'InputField',
	directives: {
		mask: _mask
	},
	props: {
		value: String,
		label: String,
		placeholder: String,
		type: {
			type: String,
			default: 'text'
		},
		error: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		inputMask: {
			type: String,
			default: ''
		}
	},
	data: function () {
		return {
			message: ''
		}
	},
	computed: {
		hasError() {
			if (this.required && this.value === '') {
				this.setMessage('required')
				return true
			} else if (this.type === 'email' && !validateEmail(this.value)) {
				this.setMessage('invalid')
				return true
			} else if (
				this.inputMask !== '' &&
				this.inputMask.length !== this.value.length
			) {
				this.setMessage('incomplete')
				return true
			} else return false
		},
		showError() {
			return this.error && this.hasError
		}
	},
	methods: {
		updateField(e) {
			this.$emit('input', e.target.value)
			this.$store.dispatch('updateStore', this.value)
		},
		setMessage(errorType) {
			let fieldName = this.label
			if (fieldName === 'Enter the address') fieldName = 'Address' // Exception label
			const ERROR = [
				{
					code: 'required',
					message: `${fieldName} cannot be empty`
				},
				{
					code: 'invalid',
					message: `${fieldName} is not valid`
				},
				{
					code: 'incomplete',
					message: `${fieldName} requires ${
						this.inputMask.replace(/[^#]/g, '').length
					} digits`
				}
			]
			let errorIndex = ERROR.findIndex((err) => err.code === errorType)
			this.message = ERROR[errorIndex].message
		}
	}
}
</script>