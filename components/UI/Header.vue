<template>
    <v-toolbar fixed app clipped class="elevation-1">
        <v-toolbar-side-icon @click="toggle()"></v-toolbar-side-icon>
        <v-toolbar-title>{{ $t('project.name')}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
            <v-btn icon slot="activator">
                <v-icon>language</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile avatar @click="setLocale('fr')">
                    <v-list-tile-avatar tile>
                        <img src="~assets/flags/france.png">
                    </v-list-tile-avatar>
                    <v-list-tile-title>Français</v-list-tile-title>
                </v-list-tile>
                <v-list-tile avatar @click="setLocale('en')">
                    <v-list-tile-avatar tile>
                        <img src="~assets/flags/england.png">
                    </v-list-tile-avatar>
                    <v-list-tile-title>English</v-list-tile-title>
                </v-list-tile>
                <v-list-tile avatar @click="setLocale('ja')">
                    <v-list-tile-avatar tile>
                        <img src="~assets/flags/japan.png">
                    </v-list-tile-avatar>
                    <v-list-tile-title>日本の</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>


<script>
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                toggle: 'ui/toggleDrawerNavigationMinimized'
            }),
            setLocale: function(locale) {
                this.$store.dispatch('ui/setLocale', locale)
            }
        }
    }
</script>

<i18n>
    fr:
        project.name: 'Chose'
    en:
        project.name: 'Things'
    ja:
        project.name: 'もの'
</i18n>
