export const state = () => ({
    buttonAState: false,
    buttonBState: false,
    buttonCState: false,
})

export const actions = {
    startListeningButtonState({commit}) {
        this.$firebase.database().ref('/buttonA').on('value', function (snapshot) {
            commit('setButtonAState', snapshot.val().state)
        });
        this.$firebase.database().ref('/buttonB').on('value', function (snapshot) {
            commit('setButtonBState', snapshot.val().state)
        });
        this.$firebase.database().ref('/buttonC').on('value', function (snapshot) {
            commit('setButtonCState', snapshot.val().state)
        });
    }
}

export const getters = {
    buttonAState: state => state.buttonAState,
    buttonBState: state => state.buttonBState,
    buttonCState: state => state.buttonCState,
}

export const mutations = {
    setButtonAState: (state, buttonState) => state.buttonAState = buttonState,
    setButtonBState: (state, buttonState) => state.buttonBState = buttonState,
    setButtonCState: (state, buttonState) => state.buttonCState = buttonState,
}
