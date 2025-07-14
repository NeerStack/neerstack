import colors from "tailwindcss/colors";
import type {Config} from 'tailwindcss'
import topo from "@tailwindcss/typography"
const config: Config = {
  // content: [
  //   "./components/**/*.{vue,js}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./app.vue",
  // ],
  darkMode: "class",
  plugins: [topo],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
      },
    },
  },
};

export default config
