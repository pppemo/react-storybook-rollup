// Rollup plugins.
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

// Import the development configuration.
import config from './dev'

// Inject the production settings.
config.output.file = 'build/app.js'
config.plugins[4] = replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
config.plugins.shift() // removes eslint for prod build
config.plugins.push(uglify())

export default config
