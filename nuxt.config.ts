// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from 'unplugin-icons/vite'
export default defineNuxtConfig({
    modules:[
        '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css', '@/assets/tailwind.css',
    ],
    tailwindcss:{
        cssPath: '~/assets/tailwind.css',
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true
    },
    colorMode:{
        classSuffix: ''
    },
    plugins:[
         '~/plugins/piniapersist.js'
    ],
    vite:{
        plugins:[
            Icons({
                autoInstall: true
            })
        ]
    },
    app:{
        head:{
            link:[
                {rel:"preconnect", href:"https://fonts.googleapis.com"},
                {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: true},
                {href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap", rel:"stylesheet"},
                {href:"https://fonts.googleapis.com/css2?family=Material+Icons", rel:"stylesheet"}
            ],
            meta:[
                {
                    name: 'description',
                    content: 'Outsource Web Development Agency With Trained Software Engineers/Developers'
                },
                {
                    property: "og:title",
                    content: "CodinMage™ | Digital Agency"
                  },
                  {
                    property: "og:site_name",
                    content: "CodinMage™"
                  },
                  {
                    property: "og:url",
                    content: "/"
                  },
                  {
                    property: "og:type",
                    content: "website"
                  },
                  {
                    property: "og:image",
                    itemProp: "image",
                    content: "/og.png"
                  },
                  {
                    property: "og:locale",
                    content: "en:GB"
                  },
                  {
                    property: "og:image:width",
                    content: "1200"
                  },
                  {
                    property: "og:image:height",
                    content: "600"
                  },
                  {
                    name: "twitter:card",
                    content: "summary_large_image"
                  },
                  {
                    name: "twitter:image:alt",
                    content: "CodinMage"
                  },
                  {
                    name: "twitter:title",
                    content: "CodinMage™"
                  },
                  {
                    name: "twitter:description",
                    content: "Outsource Web Development Agency With Trained Software Engineers/Developers"
                  },
                  {
                    name: "twitter:image",
                    content: "/og.png"
                  }
            ]
        },
        
    },
    layoutTransition:{
        name: 'default',
        mode: 'out-in'
    }
})
