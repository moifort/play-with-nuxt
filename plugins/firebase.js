import Vue from 'vue'
import firebase from '@firebase/app'
import '@firebase/database'

const firebasePlugin = {
    install(Vue) {
        if (Vue.__nuxt_firebase_installed__) {
            return
        }
        Vue.__nuxt_firebase_installed__ = true
        if (!Vue.prototype.$firebase) {
            Vue.prototype.$firebase = firebase.initializeApp({
                apiKey: process.env.firebase.apiKey,
                authDomain: process.env.firebase.authDomain,
                databaseURL: process.env.firebase.databaseURL
            })
        }
    }
}

Vue.use(firebasePlugin)

export default (ctx) => {
    const {app, store} = ctx
    app.$firebase = Vue.prototype.$firebase
    ctx.$firebase = Vue.prototype.$firebase
    store.$firebase = Vue.prototype.$firebase
}
