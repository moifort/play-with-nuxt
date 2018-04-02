<template>
    <v-card color="blue darken-2" class="white--text">
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <div class="text-xs-right">
                        <v-icon x-large dark>wb_sunny</v-icon>
                    </div>
                    <div>
                        <div style="font-size: 80px">{{ temperature | number(1, '', '°')}}</div>
                        <div>Actual temperature, {{ updateTime | moment("from") }}</div>
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
            temperature: 'weather/temperature',
            updateTime: 'weather/temperatureUpdateTime'
        }),
    }
</script>
