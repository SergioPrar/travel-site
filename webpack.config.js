const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname,'app')
    },
    devServer: {
        // this will watch our htmls files and reload the page
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        // this is where we point to out folder that webpack is going to serve up, devServer whatch for us so no need the whatch: true
        contentBase: path.join(__dirname,'app'),
        // inyect js and css to the browser on the fly, not reloading
        hot: true,
        port: 3000,
        // adding suport for all devices visit the page
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
    
}
