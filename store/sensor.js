export const state = () => ({
    temperature: 0.0,
    temperatureUpdateTime: new Date()
})

export const actions = {
    startListeningTemperature({commit}) {
        const starCountRef = this.$firebase.database().ref('/sensor/temperature')
        starCountRef.on('value', function(snapshot) {
            commit('setTemperature', snapshot.val().value)
            commit('setTemperatureUpdateTime', new Date(snapshot.val().timestamp))
        });
    }
}

export const getters = {
    temperature: state => state.temperature,
    temperatureUpdateTime: state => state.temperatureUpdateTime
}

export const mutations = {
    setTemperature: (state, temperature) => state.temperature = temperature,
    setTemperatureUpdateTime: (state, temperatureUpdateTime) => state.temperatureUpdateTime = temperatureUpdateTime
}
