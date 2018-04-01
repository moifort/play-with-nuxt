<template>
    <v-card color="grey lighten-4">
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs9>
                    <div>
                        <v-switch label="Button A" v-model="people" value="John"></v-switch>
                        <v-switch label="Button B" v-model="people" value="Jacob"></v-switch>
                        <v-switch label="Button C" v-model="people" value="Jacob"></v-switch>
                    </div>
                </v-flex>
                <v-flex xs3>
                    <v-icon x-large>album</v-icon>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>
