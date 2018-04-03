<template>
    <v-card color="grey lighten-4">
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <div class="text-xs-right">
                        <v-icon x-large>album</v-icon>
                    </div>
                    <div>
                        <v-switch :label="$t('button.a')" v-model="buttonAState"></v-switch>
                        <v-switch :label="$t('button.b')" v-model="buttonBState"></v-switch>
                        <v-switch :label="$t('button.c')" v-model="buttonCState"></v-switch>
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

<i18n>
    fr:
        button.a: "Bouton A"
        button.b: "Bouton B"
        button.c: "Bouton C"
    en:
        button.a: "Button A"
        button.b: "Button B"
        button.c: "Button C"
    ja:
        button.a: "ボタンA"
        button.b: "ボタンB"
        button.c: "ボタンC"
</i18n>
