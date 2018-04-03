import Vue from 'vue';
import VueI18n from 'vue-i18n';

// https://github.com/kazupon/vue-i18n/blob/dev/examples/sfc/src/App.vue

Vue.use(VueI18n);

export default ({app, store}) => {
    app.i18n = new VueI18n({
        locale: 'en',
        messages: {en: {}}
    });
};
