<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Edit Task - Project Name</h1>
      </v-col>
      <v-col md="6" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Project Name
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card height="250">
                <v-card-title class="text-h5">
                  Project Information
                </v-card-title>
                <v-card-text>
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card elevation="0">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      elevation="1"
                      class="d-flex justify-center"
                      width="150"
                  >Edit</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-container>
        <v-row dense>
          <v-col cols="12" align="center">
            <v-card elevation="0">
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    color="grey"
                    elevation="1"
                    class="d-flex justify-center"
                    width="150"
                    plain to="/AddTask"
                >Back</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="grey"
                    elevation="1"
                    class="d-flex justify-center"
                    width="150"
                    plain to="/controlMenuContractor"
                >Add</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/navigation-bar";
export default {
  name: "EditTask",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>