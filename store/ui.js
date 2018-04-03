export const state = () => ({
    isDrawerNavigationMinimized: false,
    locale: navigator.language.substring(0,2),
})

export const actions = {
    setLocale({commit}, locale) {
        this.i18n.locale = locale
        this.moment.locale(locale)
        commit('setLocale', locale)
    }
}

export const getters = {
    isDrawerNavigationMinimized: state => state.isDrawerNavigationMinimized,
    locale: state => state.locale,
}

export const mutations = {
    toggleDrawerNavigationMinimized: (state) => state.isDrawerNavigationMinimized = !state.isDrawerNavigationMinimized,
    setLocale: (state, locale) => state.locale = locale,
}
