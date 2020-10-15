const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        syntax: 'postcss-scss',
        modules: true,
        plugins: [
          cssnano({
            preset: 'default'
          })
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta ? 'statusbar.css' : '',
        minimize: true
      }),
      terser()
    );
    return config;
  }
};
