<template>
  <div class="project">
    <h1 class="subheader grey--text">Projects</h1>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text>
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data() {
      return {
        projects: [
          {title: "Design a new website", person: "Rashadul Hasan Saddik", due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Code up the home page", person: "Imran Sajjad", due: "10th Jan 2019", status: "complete", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Design a video thumbnails", person: "Maruf Hasan", due: "20th Dec 2019", status: "complete", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Create a community forum", person: "Jayanta Biswas", due: "20th Oct 2019", status: "overdue", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Make a analysis report", person: "Ziaur Rahman", due: "2nd Jun 2019", status: "pending", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"},
          {title: "Design a new website", person: "Jayanta Biswas", due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae commodi consequatur doloribus ducimus esse explicabo fuga magni nulla officia possimus quam quos sapiente, tempore ut veniam? Aspernatur, numquam?"}
        ]
      };
    },
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person == "Jayanta Biswas"
        })
      }
    }
  }
</script>
