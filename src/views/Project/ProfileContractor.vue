<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Profile's Contractor</h1>
      </v-col>
      <v-col cols="8" md="3">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            max-width="350"
            src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
        ></v-img>
        <v-card elevation="0">
          <v-card-title> Qualification</v-card-title>
          <v-card-actions class="d-flex justify-center mb-2">
            <v-progress-linear value="75"></v-progress-linear>
            <v-spacer></v-spacer>
            <v-icon
                large
                color="blue darken-2"
            >
              mdi-heart
            </v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="8" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h5">
                  Contractor Name
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card height="300">
                <v-card-title class="text-h5">
                  Contractor Information
                </v-card-title>
                <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12" align="center">
              <v-btn
                  color="primary"
                  elevation="2"
              >Project History </v-btn>
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
                plain to="/searchcontractor"
            >Back</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/navigation-bar";
export default {
  name: "ProfileContractor",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>