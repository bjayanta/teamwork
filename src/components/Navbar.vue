<template>
    <nav>
        <v-navigation-drawer app absolute :mini-variant.sync="mini" v-model="drawer" color="indigo" dark>
            <v-list dense>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="/avatar/john.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Jayanta Biswas</v-list-item-title>
                        <v-list-item-subtitle>bjayanta</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>

                <v-list-item>
                    <Popup @projectAdded="snackbar = true" />
                </v-list-item>

                <v-divider></v-divider>
                <v-subheader>Basic</v-subheader>

                <v-list-item router to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/email">
                    <v-list-item-icon>
                        <v-icon>mdi-email</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Email</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-subheader>Application</v-subheader>

                <v-list-group prepend-icon="mdi-apps" no-action>
                    <template v-slot:activator>
                        <v-list-item-title>Teamwork</v-list-item-title>
                    </template>

                    <v-list-item router to="/project">
                        <v-list-item-title>Project</v-list-item-title>
                    </v-list-item>

                    <v-list-item router to="/team">
                        <v-list-item-title>Team</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-divider></v-divider>
                <v-subheader>Account </v-subheader>

                <v-list-group prepend-icon="mdi-account-circle">
                    <template v-slot:activator>
                        <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Admin</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link>
                            <v-list-item-title>Management</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-account-group-outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Settings</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-settings</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link>
                            <v-list-item-title>Create</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Read</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-book-open</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Update</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-update</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-title>Delete</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon>mdi-trash-can-outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <!-- snackbar -->
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar app flat class="grey lighten-5">
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Code</span>
                <span class="font-weight-bold">Rill</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text class="grey--text">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
    import Popup from "./Popup";

    export default {
        components: { Popup },
        data() {
            return {
                drawer: true,
                mini: false,
                links: [
                    {icon: 'mdi-home', text: 'Dashboard', route: '/'},
                    {icon: 'mdi-apps', text: 'Projects', route: '/project'},
                    {icon: 'mdi-account', text: 'Team', route: '/team'},
                ],
                snackbar: false,
            }
        }
    };
</script>
