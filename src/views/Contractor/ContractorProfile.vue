<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Profile's Contractor</h1>
      </v-col>
      <v-col cols="9" md="3">
        <v-card  class="mx-auto"
                 max-width="354"
                 height="180"
                 elevation="0">
          <v-img
              max-height="280"
              max-width="350"
              src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
          ></v-img>
        </v-card>
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
                <v-card-title class="text-h6">
                  José Sebastián De la Cruz Vaca
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h6">
                  jsdlcvac@gmail.com
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h6">
                  Las Casuarinas 212, La Molina
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-card-title class="text-h6">
                  987 456 678
                </v-card-title>
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
                  plain to="/HistorialProjectOwner"
              >Projects History</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-container>
        <v-card elevation="0">
          <v-card-actions class="d-flex justify-center mb-0">
            <v-btn
                color="grey"
                elevation="1"
                class="d-flex justify-center"
                width="150"
                plain to="/dashboard"
            >Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                color="grey"
                elevation="1"
                class="d-flex justify-center"
                width="150"
                plain to="/editProfileOwner"
            >Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/navigation-bar";
export default {
  name: "ContractorProfile",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>