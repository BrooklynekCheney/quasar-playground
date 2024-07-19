import { boot } from 'quasar/wrappers'
import wretch from 'wretch'

const api = wretch('https://jsonplaceholder.typicode.com/')

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.config.globalProperties.$wretch = wretch
  app.config.globalProperties.$api = api
})

export { api }
