<template>
    <v-card>
        <v-list two-line>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>system_update_alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>1.0.0-OME</v-list-tile-title>
                    <v-list-tile-sub-title>Hardware version</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>update</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>0.0.1</v-list-tile-title>
                    <v-list-tile-sub-title>Application version</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>
