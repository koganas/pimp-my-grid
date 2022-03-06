import { mask } from 'vue-the-mask'

export const validateForm = (refs) => {
  for (const [value] of Object.entries(refs)) {
    if (value.hasError) return false
  }
  return true
}

export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(String(email).toLowerCase())
}

export const theMask = {
  bind(el, binding) {
    if (binding.value && binding.value !== '') {
      mask(el, binding)
    }
  },
  unbind() { }
}