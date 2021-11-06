<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Project Name</h1>
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
              <v-card>
                <v-card-title class="text-h5">
                  Objective of the project
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
      </v-col>
      <v-col md="4" class="px-0 mx-auto">
        <v-container  align="center">
          <v-img
              max-height="340"
              max-width="270"
              src="@/assets/detail.png"
          ></v-img>
        </v-container>
        <v-container align="center">
          <v-card elevation="0">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  align="center"
                  color="primary"
                  elevation="2"
                  plain to="/profile"
              >Profile Owner</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
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
                    plain to="/HistorialProjectOwner"
                >Back</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="grey"
                    elevation="1"
                    class="d-flex justify-center"
                    width="150"
                    plain to="/dashboard"
                >Continue</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "../../components/navigation-bar";
export default {
  name: "DetailProject",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>