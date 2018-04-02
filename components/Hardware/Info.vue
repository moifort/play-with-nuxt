<template>
    <v-card>
        <v-list two-line>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>system_update_alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{oemVersion}}-OEM</v-list-tile-title>
                    <v-list-tile-sub-title>Hardware version, {{ updateTime | moment("from") }}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>update</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ applicationVersion }} - Status: {{ status }}</v-list-tile-title>
                    <v-list-tile-sub-title>Application version, {{ updateTime | moment("from") }}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            status: 'update/status',
            applicationVersion: 'update/applicationVersion',
            oemVersion: 'update/oemVersion',
            updateTime: 'update/statusUpdateTime',
        }),
    }
</script>
