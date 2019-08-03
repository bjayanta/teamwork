<template>
    <div class="team">
        <h1>Team</h1>

        <v-container grid-list-xs>
            <v-layout wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>

                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'team',
        data() {
            return {
                team: [
                    {name: 'Jayanta Biswas', role: "Web developer", avatar: '/avatar/chelsea-stewarts.jpg'},
                    {name: 'Mobarok Hosin Joy', role: "Web developer", avatar: '/avatar/christinas.jpg'},
                    {name: 'Maruf Hasan', role: "Web developer", avatar: '/avatar/chelsea-stewarts.jpg'},
                    {name: 'Saddik', role: "Web and Graphic designer", avatar: '/avatar/john.jpg'},
                    {name: 'Imran Sajjad', role: "Marketer", avatar: '/avatar/julia.jpg'},
                    {name: 'Ziaur Rahman', role: "Marketer", avatar: '/avatar/kourtnee.jpg'},
                    {name: 'Nawaz Khan', role: "Web developer and designer", avatar: '/avatar/amanda-spence.jpg'},
                    {name: 'Titu Akanda', role: "HR", avatar: '/avatar/chelsea-stewarts.jpg'},
                    {name: 'Mamun Akanda', role: "CEO", avatar: '/avatar/christinas.jpg'},
                ]
            }
        }
    };
</script>
