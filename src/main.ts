import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import ToastService from 'primevue/toastservice'
import router from './router'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import appMessages from '@/locale'
import './setup'
// Styles
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const pinia = createPinia()
const i18n = createI18n({
  locale: 'no', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: appMessages, // set locale messages
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(i18n)
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)

app.mount('#app')
