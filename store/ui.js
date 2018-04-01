
export const state = () => ({
    isDrawerNavigationMinimized: false
})

export const getters = {
    isDrawerNavigationMinimized: state => state.isDrawerNavigationMinimized
}

export const mutations = {
    toggleDrawerNavigationMinimized: (state, isMinimized) => state.isDrawerNavigationMinimized = !state.isDrawerNavigationMinimized
}
