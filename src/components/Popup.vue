<template>
    <v-dialog persistent width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text class="success" v-on="on">Add new project</v-btn>
        </template>

        <v-card class="ma-1 pa-5">
            <v-card-title class="mb-5">
                <span class="headline">Add a new project</span>
            </v-card-title>

            <v-form ref="form">
                <v-card-text>
                    <v-text-field label="Title *" v-model="title" prepend-icon="mdi-folder" :rules="titleRules" required></v-text-field>
                    <v-textarea label="Information *" v-model="content" prepend-icon="mdi-pencil" :rules="contentRules"></v-textarea>

                    <!-- date picker -->
                    <v-menu v-model="datePicker" :close-on-content-click="false" full-width max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-text-field :value="dateFormattedFn" clearable label="Due date *" readonly v-on="on" prepend-icon="mdi-calendar"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @change="datePicker = false"></v-date-picker>
                    </v-menu>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="warning" @click="dialog = false">Close</v-btn>
                    <v-btn class="success" @click="submit" :loading="loading" :disabled="loading">Add Project</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
    import format from 'date-fns/format';
    import db from '@/firebase';

    export default {
        data() {
            return {
                dialog: false,
                title: '',
                content: '',
                date: new Date().toISOString().substr(0, 10),
                datePicker: false,
                titleRules: [
                    v => !!v || 'Title is required.',
                    v => (v && v.length <= 100) || 'Title must be less than 10 characters',
                ],
                contentRules: [
                    v => !!v || 'Content is required.'
                ],
                loading: false,
            };
        },
        methods: {
            submit() {
                if(this.$refs.form.validate()) {
                    // disable the submit button
                    this.loading = true;

                    // data
                    const project = {
                        title: this.title,
                        content: this.content,
                        due: format(this.date, 'Do MMM YYYY'),
                        person: 'Jayanta Biswas',
                        status: 'ongoing'
                    };

                    // insert
                    db.collection('projects').add(project).then(() => {
                        // enable the submit button
                        this.loading = false;
                        // hide dialog box
                        this.dialog = false;
                        // call snackbar
                        this.$emit("projectAdded");

                        // success status
                        console.log("Successfully added into databases.");
                    });
                }
            }
        },
        computed: {
            dateFormattedFn () {
                return this.date ? format(this.date, 'MMMM Do YYYY') : ''
            }
        }
    }
</script>
