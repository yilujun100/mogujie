// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/mogujie' : '/',
    devServer: {
        /* proxy: {
            '/api/*': {
                target: 'https://www.easy-mock.com/mock/5fb49a3d8ab3eb27be073c08/mogujie',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } */
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 75,
                        exclude: /(node_module)/,
                        minPixelValue: 3,
                        selectorBlackList: ['van']
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
