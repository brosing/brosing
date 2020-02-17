const withMDX = require('@next/mdx')({
  extension: /.mdx?$/,
  options: {
    rehypePlugins: [require('mdx-prism')],
  },
})

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      module: 'empty',
    }

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack' }],
      }
    )

    return config
  },
})
