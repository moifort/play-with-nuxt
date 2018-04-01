<template>
    <v-toolbar fixed app clipped class="elevation-1">
        <v-toolbar-side-icon @click="toggle()"></v-toolbar-side-icon>
        <v-toolbar-title>Things</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>
    </v-toolbar>
</template>


<script>
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                toggle: 'ui/toggleDrawerNavigationMinimized'
            })
        }
    }
</script>
