import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        components,
        directives,
        locale: {
            locale: 'fa',
            rtl: {
                fa: true,
            },
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        background: '#FFFFFF',
                        surface: '#FFFFFF',
                        primary: '#002147',
                        'primary-darken-1': '#142759',
                        secondary: '#17c3b2',
                        'secondary-darken-1': '#0a8d81',
                        error: '#B00020',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FB8C00',
                    },
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})