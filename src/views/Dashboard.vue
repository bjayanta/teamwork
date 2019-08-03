<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

      <v-container grid-list-xs>
        <v-layout class="mb-4">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text @click="sortBy('title')" v-on="on">
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span>Sort projects by project title</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text @click="sortBy('person')" v-on="on">
                <v-icon>mdi-account</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>Sort projects by person</span>
          </v-tooltip>
        </v-layout>

        <v-card flat v-for="project in projects" :key="project.title">
          <v-layout wrap>
            <v-flex xs12 md6 class="pa-3" :class="`project ${project.status}`">
              <div class="caption grey--text">Project title</div>
              <p>{{ project.title }}</p>
            </v-flex>

            <v-flex xs6 sm4 md2 class="pa-3">
              <div class="caption grey--text">Person</div>
              <p>{{ project.person }}</p>
            </v-flex>

            <v-flex xs6 sm4 md2 flat class="pa-3">
              <div class="caption grey--text">Due by</div>
              <p>{{ project.due }}</p>
            </v-flex>

            <v-flex xs2 sm4 md2 flat class="pa-3">
              <v-chip small :class="`${project.status} white--text caption`">{{ project.status }}</v-chip>
            </v-flex>
          </v-layout>

          <v-divider></v-divider>
        </v-card>
      </v-container>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {
        projects: [
          {title: "Design a new website", person: "Rashadul Hasan Saddik", due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Code up the home page", person: "Imran Sajjad", due: "10th Jan 2019", status: "complete", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Design a video thumbnails", person: "Maruf Hasan", due: "20th Dec 2019", status: "complete", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Create a community forum", person: "Jayanta Biswas", due: "20th Oct Jan 2019", status: "overdue", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Make a analysis report", person: "Ziaur Rahman", due: "2nd Jun 2019", status: "pending", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"}
        ]
      }
    },
    methods: {
      sortBy: function(prop) {
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  };
</script>

<style lang="scss">
  .project.ongoing { border-left: 4px solid orange; }
  .theme--light.v-chip:not(.v-chip--active).ongoing { background: orange; }
  .project.complete { border-left: 4px solid limegreen; }
  .theme--light.v-chip:not(.v-chip--active).complete { background: limegreen; }
  .project.pending { border-left: 4px solid blueviolet; }
  .theme--light.v-chip:not(.v-chip--active).pending { background: blueviolet; }
  .project.overdue { border-left: 4px solid tomato; }
  .theme--light.v-chip:not(.v-chip--active).overdue { background: tomato; }
</style>
