<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md3>
                <Temperature/>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <CapacitiveButtons/>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <Info/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Temperature from '~/components/Weather/Temperature'
    import CapacitiveButtons from '~/components/Hardware/CapacitiveButtons'
    import Info from '~/components/Hardware/Info'

    export default {
        components: {
            Temperature,
            CapacitiveButtons,
            Info
        }
    }
</script>
