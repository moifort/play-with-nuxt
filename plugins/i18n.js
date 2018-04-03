import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default (ctx) => {
    const {app, store} = ctx
    const i18n = new VueI18n({
        locale: navigator.language.substring(0,2),
        fallbackLocale: 'en',
    });
    app.i18n = i18n
    ctx.i18n = i18n
    store.i18n = i18n
};
