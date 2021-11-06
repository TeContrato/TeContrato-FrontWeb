<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="12" md="12" align="center">
        <h1>Profile's Owner</h1>
      </v-col>
      <v-col cols="9" md="3">
        <v-card  class="mx-auto"
                 max-width="354"
                 height="250"
                 elevation="0">
          <v-img
              max-height="200"
              max-width="340"
              src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
          ></v-img>
          <v-card-actions class="d-flex justify-center mb-2">
            <v-spacer></v-spacer>
            <v-icon
                x-large
                color="blue darken-2"

            >
              mdi-upload
            </v-icon>
          </v-card-actions>
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
      <v-col md="5" class="px-0 mx-auto">
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
      </v-col>
      <v-col md="1" class="px-0 mx-0">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="primary"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="primary"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="primary"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="primary"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="4" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12" align="center">
              <v-btn
                  color="primary"
                  elevation="2"
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
                plain to="/profileC"
            >Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/navigation-bar";
export default {
  name: "editProfileContractor",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>