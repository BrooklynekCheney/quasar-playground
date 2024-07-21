import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMsal = defineStore('msal', () => {
  const loggedIn = useLocalStorage('useMsal.loggedIn', false)
  const loggingIn = ref(false)
  const loggingOut = ref(false)

  async function login () {
    loggingIn.value = true

    // write login logic
    setTimeout(() => {
      loggingIn.value = false
      loggedIn.value = true
    }, 3_000)
  }

  async function logout () {
    loggingOut.value = true

    setTimeout(() => {
      loggedIn.value = false
      loggingOut.value = false
    }, 2_000)
  }

  return {
    login,
    loggingIn,
    loggedIn,
    logout,
    loggingOut
  }
})
