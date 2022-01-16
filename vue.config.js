const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/styles.scss";',
                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            }
        }
    },
    configureWebpack:{
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 10000,
                maxSize: 250000,
            }
        },
        plugins: [

        ]
    }
}
