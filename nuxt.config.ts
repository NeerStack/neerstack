// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from "unplugin-icons/vite";

// import webpack from 'webpack'

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    // "bootstrap-vue/nuxt",
    // "nuxt-compress",
    // "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    // "@nuxtjs/gtm",
    // "bootstrap",
  ],
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    // "@/assets/tailwind.css",
    "@/assets/css/vendor/bootstrap.min.css",
    "@/assets/css/vendor/owl.carousel.min.css",
    "@/assets/css/vendor/owl.theme.default.min.css",
    "@/assets/css/vendor/magnific-popup.css",
    "@/assets/css/main.css",
    "@/assets/css/fontawesome-all.min.css",
    // 'bootstrap/dist/css/bootstrap.min.css'
  ],
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API,
    },
  },
  // bootstrapVue: {
  //   bootstrapCSS: true, // Or `css: false`
  //   bootstrapVueCSS: true, // Or `bvCSS: false`
  //   components: [
  //     "BContainer",
  //     "BRow",
  //     "BCol",
  //     "BFormInput",
  //     "BButton",
  //     "BTable",
  //     "BModal",
  //   ],
  //   directives: ["VBModal", "VBPopover", "VBTooltip", "VBScrollspy"],
  //   Icons: true,
  // },
  build: {
    transpile: ["klaviyo-sdk"],
  },

  app: {
    head: {
      __dangerouslyDisableSanitizersByTagID: {
        "gtag-init": ["innerHTML"],
      },
      __dangerouslyDisableSanitizers: ["script", "link"],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,500i,700,700i,900",
          rel: "stylesheet",
          type: "text/css",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          type: "text/css",
        },
        // {
        //   href: "@/assets/css/vendor/owl.carousel.min.css",
        //   rel: 'stylesheet',
        //   type: "text/css"
        // },
        // {
        //   href: "@/assets/css/vendor/owl.theme.default.min.css",
        //   rel: 'stylesheet',
        //   type: "text/css"
        // },
        // {
        //   href: "@/assets/css/vendor/magnific-popup.css",
        //   rel: 'stylesheet',
        //   type: "text/css"
        // },
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "https://neerstack.com/rss",
        },
      ],
      meta: [
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: "description",
          content:
            "Hire Professional Software Engineers/Developers for Outsourced Web Development Projects",
        },
        {
          property: "og:title",
          content: "NeerStack | Software Development Company",
        },
        {
          property: "og:site_name",
          content: "NeerStack",
        },
        {
          property: "og:url",
          content: "https://neerstack.com",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://neerstack.com/og.png",
        },
        {
          property: "og:locale",
          content: "en:GB",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "600",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image:alt",
          content: "NeerStack",
        },
        {
          name: "twitter:title",
          content: "NeerStack",
        },
        {
          name: "twitter:description",
          content:
            "Hire Professional Software Engineers/Developers for Outsourced Web Development Projects",
        },
        {
          name: "twitter:image",
          content: "https://neerstack.com/og.png",
        },
      ],
      script: [
        // {
        //   type:"text/javascript",
        //   src:"//static.klaviyo.com/onsite/js/klaviyo.js?company_id=VsQiNE"
        // },
        {
          src: "/js/vendor/jquery.min.js",
          defer: true,
          type: "text/javascript",
        },
        // {
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js',
        //   defer: true
        // },
        {
          src: "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js",
          integrity: "sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=",
          crossorigin: "anonymous",
          defer: true,
          type: "text/javascript",
        },
        // {
        //   src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js",
        //   defer: true
        // },
        {
          src: "/js/vendor/jquery-migrate.min.js",
          defer: true,
          type: "text/javascript",
        },
        // {
        //   src:"https://code.jquery.com/jquery-migrate-3.4.0.min.js",
        //   integrity: "sha256-mBCu5+bVfYzOqpYyK4jm30ZxAZRomuErKEFJFIyrwvM=",
        //   crossorigin: "anonymous"
        // },
        {
          src: "/js/vendor/easing-1.3.js",
          defer: true,
          type: "text/javascript",
        },
        // {
        //   src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
        //   defer: true
        // },
        {
          src: "/js/vendor/bootstrap.bundle.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/isotope.pkgd.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/jquery.waypoints.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/jquery.counterup.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/imagesloaded.pkgd.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/owl.carousel.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/vendor/jquery.magnific-popup.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/plugins.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "/js/main.min.js",
          defer: true,
          type: "text/javascript",
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-YY4WR0ZRCR",
          async: true,
        },
        // {
        //   src: "https://www.googletagmanager.com/gtag/js?id=G-YY4WR0ZRCR",
        //   async: true,
        // },
        {
          id: "gtag-init",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY4WR0ZRCR');
          `,
          type: "text/javascript",
        },
        // {
        //   children: `window.dataLayer = window.dataLayer || [];
        //         function gtag(){dataLayer.push(arguments);}
        //         gtag('js', new Date());

        //         gtag('config', 'G-YY4WR0ZRCR');`,
        //   type: "text/javascript",
        //   async: true,
        // },
      ],
    },
  },
  // gtm: {
  //   id: "G-YY4WR0ZRCR",
  //   enabled: true,
  //   debug: true,
  //   config: {
  //     anonymize_ip: true,
  //     send_page_view: true,
  //   },
  //   scriptDefer: true,
  //   pageTracking: true,
  // },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/rss.xml"],
    },
  },
  // tailwindcss: {
  //   cssPath: "@/assets/tailwind.css",
  //   configPath: "@/tailwind.config.js",
  //   exposeConfig: false,
  //   viewer: true,
  // },
  colorMode: {
    classSuffix: "",
  },
  plugins: ["@/plugins/piniapersist.js", "@/plugins/scrollToTop.client.js"],
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },

  layoutTransition: {
    name: "default",
    mode: "out-in",
  },
  // "nuxt-compress": {
  //   gzip: {
  //     threshold: 8192,
  //   },
  //   brotli: {
  //     threshold: 8192,
  //   },
  // },
  site: {
    url: "https://neerstack.com",
    name: "NeerStack",
  },
  sitemap:{
    routes: async () => {
      const { $content } = require("@nuxt/content");
      const posts = await $content("blog").only(["slug"]).fetch();
      return posts.map((post: any) => `/blog/${post.slug}`);
    },
    exclude: [
      'admin/**',
      'about_old',
      'index_old',
    ]
  }
});
