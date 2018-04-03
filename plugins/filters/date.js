import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/fr'
import 'moment/locale/ja'

Vue.use(VueMoment, {
    moment
})

Vue.moment.locale(navigator.language.substring(0,2))

export default (ctx) => {
    const {app, store} = ctx
    store.moment = moment
};


