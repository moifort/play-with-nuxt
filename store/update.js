export const state = () => ({
    status: "NOT_DEFINED",
    applicationVersion: "No defined",
    oemVersion: "No defined",
    statusUpdateTime: new Date()
})

export const actions = {
    startListeningUpdate({commit}) {
        const starCountRef = this.$firebase.database().ref('/update')
        starCountRef.on('value', function(snapshot) {
            commit('setStatus', snapshot.val().status)
            commit('setApplicationVersion', snapshot.val().applicationVersion)
            commit('setOemVersion', snapshot.val().oemVersion)
            commit('setStatusUpdateTime', new Date(snapshot.val().timestamp))
        });
    }
}

export const getters = {
    status: state => state.status,
    applicationVersion: state => state.applicationVersion,
    oemVersion: state => state.oemVersion,
    statusUpdateTime: state => state.statusUpdateTime,
}

export const mutations = {
    setStatus: (state, status) => state.status = status,
    setApplicationVersion: (state, applicationVersion) => state.applicationVersion = applicationVersion,
    setOemVersion: (state, oemVersion) => state.oemVersion = oemVersion,
    setStatusUpdateTime: (state, statusUpdateTime) => state.statusUpdateTime = statusUpdateTime,
}
