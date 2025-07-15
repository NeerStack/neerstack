import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faMagnifyingGlass,
    faArrowRightLong,
    faArrowLeftLong,
    faUserSecret,
    faMoon,
    faSun,
    faLongArrowLeft,
    faChevronRight
  } from "@fortawesome/free-solid-svg-icons";

   import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
  import {
    faTwitter,
    faGithub,
    faLinkedin,
    faXTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false

library.add(
    faTwitter,
    faXTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    faMagnifyingGlass,
    faMoon,
    faSun,
    faLongArrowLeft,
    faArrowRightLong,
    faArrowLeftLong,
    faUserSecret,
    faPenToSquare,
    faChevronRight
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
