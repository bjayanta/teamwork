<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <div v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`project ${project.status}`">
          <v-flex xs12 md6>
            <v-card flat class="pa-3">
              <div class="caption grey--text">Project title</div>
              <p>{{ project.title }}</p>
            </v-card>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <v-card flat class="pa-3">
              <div class="caption grey--text">Person</div>
              <p>{{ project.person }}</p>
            </v-card>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <v-card flat class="pa-3">
              <div class="caption grey--text">Due by</div>
              <p>{{ project.due }}</p>
            </v-card>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <v-card flat class="pa-3">
              <div class="caption grey--text">Status</div>
              <p>{{ project.status }}</p>
            </v-card>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
      </div>
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
    }
  };
</script>

<style lang="scss">
  .project.ongoing { border-left: 4px solid orange; }
  .project.complete { border-left: 4px solid limegreen; }
  .project.pending { border-left: 4px solid blueviolet; }
  .project.overdue { border-left: 4px solid tomato; }
</style>
