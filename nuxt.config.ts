// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from 'unplugin-icons/vite'
import webpack from 'webpack'

export default defineNuxtConfig({
    modules:[
        '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'bootstrap-vue/nuxt'
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css', '~/assets/tailwind.css',
        '~/assets/css/vendor/bootstrap.min.css', "~/assets/css/vendor/owl.carousel.min.css", "~/assets/css/vendor/owl.theme.default.min.css",
        "~/assets/css/vendor/magnific-popup.css", "~/assets/css/main.css",
        '~/assets/css/fontawesome-all.min.css'
    ],
    bootstrapVue: {
      bootstrapCSS: true, // Or `css: false`
      bootstrapVueCSS: true, // Or `bvCSS: false`
      components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy'],
    Icons: true
    },
    app:{
      head:{
        __dangerouslyDisableSanitizers: ['script'],
          link:[
              {rel:"preconnect", href:"https://fonts.googleapis.com"},
              {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: true},
              {href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap", rel:"stylesheet"},
              {href:"https://fonts.googleapis.com/css2?family=Material+Icons", rel:"stylesheet"},
              {
                href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,500i,700,700i,900", rel:"stylesheet"
              },
              {
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
                rel: 'stylesheet'
              }
              
          ],
          meta:[
              {
                'http-equiv': 'X-UA-Compatible',
                content: "IE=edge"
              },
              {
                name:"theme-color", content:"#ffffff"
              },
              {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
              },
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
          ],
          script:[
            {
              src: "js/vendor/jquery.min.js",
              defer: true,
             
            }, 
            // {
            //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js',
            //   defer: true
            // },
            {
              src:"https://code.jquery.com/ui/1.13.2/jquery-ui.min.js",integrity:"sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=",crossorigin:"anonymous",
              defer: true
            },
            // {
            //   src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js",
            //   defer: true
            // },
            {
              src: "js/vendor/jquery-migrate.min.js",
               defer: true,
             
            },
            // {
            //   src:"https://code.jquery.com/jquery-migrate-3.4.0.min.js",
            //   integrity: "sha256-mBCu5+bVfYzOqpYyK4jm30ZxAZRomuErKEFJFIyrwvM=",
            //   crossorigin: "anonymous"
            // },
            {
              src: "js/vendor/easing-1.3.js",
               defer: true,
             
            },
            // {
            //   src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
            //   defer: true
            // },
            {
              src: "js/vendor/bootstrap.bundle.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/isotope.pkgd.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/jquery.waypoints.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/jquery.counterup.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/imagesloaded.pkgd.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/owl.carousel.min.js",
               defer: true,
             
            },
            {
              src: "js/vendor/jquery.magnific-popup.min.js",
               defer: true,
             
            },
            {
              src: "js/plugins.js",
               defer: true,
             
            },
            {
              src: "js/main.min.js",
              defer: true,
             
            }
          ]
      },
      
    },
    
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
    
    layoutTransition:{
        name: 'default',
        mode: 'out-in'
    }
})
