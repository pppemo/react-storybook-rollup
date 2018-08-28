// Rollup plugins.
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import eslint from 'rollup-plugin-eslint'
import reactSvg from 'rollup-plugin-react-svg'

const basicRollupConfig = ({ nodeModulesPath }) => ({
  input: 'src/index.js',
  output: {
    file: 'build/app.js',
    format: 'umd'
  },
  name: 'uiKitLibrary',
  plugins: [
    eslint({
      include: ['**/*.js', '**/*.jsx', '**/*.mjs'],
      throwOnError: true
    }),
    reactSvg({
      // svgo options
      svgo: {
        plugins: [], // passed to svgo
        multipass: true
      },
      jsx: false
    }),
    babel({
      babelrc: false,
      exclude: [`${nodeModulesPath}/**`],
      ignore: ['**/*.scss'],
      presets: [['es2015', { modules: false }], 'stage-0', 'react'],
      plugins: ['external-helpers'],
    }),
    cjs({
      exclude: `${nodeModulesPath}/process-es6/**`,
      include: `${nodeModulesPath}/**`,
      namedExports: {
        [`${nodeModulesPath}/react/index.js`]: ['Children', 'Component', 'PropTypes', 'createElement'],
        [`${nodeModulesPath}/react-dom/index.js`]: ['render'],
        [`${nodeModulesPath}/react-svg/node_modules/prop-types/index.js`]:
          ['oneOf', 'func', 'string', 'bool', 'object']
      }
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    }),
    postcss({
      modules: true
    })
  ],
  sourcemap: false
})

export default basicRollupConfig
