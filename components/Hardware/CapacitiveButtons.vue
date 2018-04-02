<template>
    <v-card color="grey lighten-4">
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <div class="text-xs-right">
                        <v-icon x-large>album</v-icon>
                    </div>
                    <div>
                        <v-switch label="Button A" v-model="buttonAState"></v-switch>
                        <v-switch label="Button B" v-model="buttonBState"></v-switch>
                        <v-switch label="Button C" v-model="buttonCState"></v-switch>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            buttonAState: 'button/buttonAState',
            buttonBState: 'button/buttonBState',
            buttonCState: 'button/buttonCState'
        }),
    }
</script>
