import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import uglify from "@lopatnov/rollup-plugin-uglify";

export default {
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser(),
    uglify()
  ]
};