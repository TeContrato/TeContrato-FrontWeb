<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Control Menu - "Kitchen Project"</h1>
      </v-col>
      <v-col cols="12" md="12">
        <v-progress-linear value="75"></v-progress-linear>
      </v-col>
      <v-col md="4" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Task 1
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Task 2
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Task 3
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Task 4
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="2" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="primary"
                    plain to="/EditTask"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="primary"
                    plain to="/EditTask"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="primary"
                    plain to="/EditTask"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="primary"
                    plain to="/EditTask"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="6" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Manager
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Manager
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Manager
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Manager
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="4" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-btn
                    color="primary"
                    elevation="2"
                    plain to="/AddTask"
                >Add Task </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="4" class="px-0 mx-auto" align="center">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <div class="text-center">
                  <v-dialog
                      v-model="dialog"
                      width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="primary lighten-2"
                          dark
                          v-bind="attrs"
                          v-on="on"
                      >
                        Add Manager
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-title align="center">Add Manager</v-card-title>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                      <v-row align="center" class="px-4 mx-5">
                        <v-col md="4" class="px-0 mx-auto">
                          <v-container>
                            <v-row dense>
                              <v-col cols="12">
                                <v-card>
                                  <v-card-title class="text-h5">
                                    Name
                                  </v-card-title>
                                </v-card>
                              </v-col>

                            </v-row>
                          </v-container>
                        </v-col>
                        <v-col md="5" class="px-0 mx-auto">
                          <v-container>
                            <v-row dense>
                              <v-col cols="12">
                                <v-card>
                                  <v-card-title class="text-h5">
                                    Specialty
                                  </v-card-title>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-btn
                            color="primary"
                            @click="dialog = false"
                        >
                          Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="dialog = false"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-container>
        <v-row dense>
          <v-col cols="12" align="center">
            <v-btn
                color="gray"
                elevation="2"
                to="/projects"
            >Back</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "../../components/navigation-bar";
export default {
  name: "controlMenuContractor",
  components:{
    NavigationBar,
  },
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>

</style>
