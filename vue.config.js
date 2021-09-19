// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 75,
                        exclude: /(node_module)/,
                        minPixelValue: 3
                    })
                ]
            },
            scss: {
                prependData: `
                    @import "@/style/global.scss";
                `
            }
        }
    }
}
