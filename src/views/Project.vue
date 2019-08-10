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
  import db from '@/firebase';

  export default {
    name: 'project',
    data() {
      return {
        projects: []
      };
    },
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person == "Jayanta Biswas"
        })
      }
    },
    created() {
      db.collection('projects').onSnapshot(response => {
        const changes = response.docChanges();
        changes.forEach(change => {
          if(change.type == 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>
