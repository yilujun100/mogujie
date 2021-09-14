// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/style/tools/_sassMagic.scss";'
            }
        }
    }
};
