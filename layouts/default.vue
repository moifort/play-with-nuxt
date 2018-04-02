<template>
    <v-app light>
        <NavigationDrawer/>
        <Header/>
        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</template>

<script>
    import Header from '~/components/UI/Header'
    import NavigationDrawer from '~/components/UI/NavigationDrawer'

    export default {
        components: {
            Header,
            NavigationDrawer
        }
    }
</script>
