<template>
    <v-navigation-drawer fixed app permanent :mini-variant="isDrawerNavigationMinimized">
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="~/assets/moi.png">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Thibaut Mottet</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile @click="$router.push('/')">
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('dashboard')}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="$router.push('/about')">
                <v-list-tile-action>
                    <v-icon>code</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('about')}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            isDrawerNavigationMinimized: 'ui/isDrawerNavigationMinimized'
        }),
    }
</script>

<i18n>
    fr:
        dashboard: "Bureau"
        about: "A propos"
    en:
        dashboard: "Dashboard"
        about: "About"
    ja:
        dashboard: "ダッシュボード"
        about: "約"
</i18n>
