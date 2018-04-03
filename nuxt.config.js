const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: false,

    /*
    ** Global CeSS
    */
    css: [
        'vuetify/src/stylus/main.styl'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vuetify',
        '@/plugins/firebase',
        '@/plugins/filters/number',
        '@/plugins/filters/date',
        '@/plugins/i18n.js',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
    ],

    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    env: {
        firebase: {
            apiKey: 'AIzaSyCZo04vGSPU57UlKhyHdCVSBFG8nNE9Vmc',
            authDomain: 'things-fae70.firebaseapp.com',
            databaseURL: 'https://things-fae70.firebaseio.com/'
        }
    },


    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.module.rules.find( el => el.loader === 'vue-loader' ).options.loaders.i18n = '@kazupon/vue-i18n-loader'

            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }

        }
    },
}
