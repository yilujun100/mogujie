// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/style/settings/var.scss";
                    @import "@/style/tools/_sassMagic.scss";
                `
            }
        }
    }
}
