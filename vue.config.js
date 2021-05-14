const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/styles.scss";',
                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            }
        }
    }
}
// module.exports.cssLoaders = function (options) {
//     return {
//         sass: generateLoaders('sass', { indentedSyntax: true, includePaths: [path.resolve(__dirname, '../node_modules/compass-mixins/lib')] }),
//         scss: generateLoaders('sass', { includePaths: [path.resolve(__dirname, '../node_modules/compass-mixins/lib')] }),
// }