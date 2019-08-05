<template>
    <v-dialog persistent width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text class="success" v-on="on">Add new project</v-btn>
        </template>

        <v-card class="ma-1 pa-5">
            <v-card-title class="mb-5">
                <span class="headline">Add a new project</span>
            </v-card-title>

            <form>
                <v-card-text>
                    <v-text-field label="Title *" v-model="title" prepend-icon="mdi-folder" required></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="warning" @click="dialog = false">Close</v-btn>
                    <v-btn class="success" @click="submit">Add Project</v-btn>
                </v-card-actions>
            </form>
        </v-card>
    </v-dialog>
</template>

<script>
    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

    export default {
        data() {
            return {
                dialog: false,
                title: '',
                content: ''
            };
        },
        methods: {
            submit() {
                console.log(this.title, this.content);
            }
        }
    }
</script>
