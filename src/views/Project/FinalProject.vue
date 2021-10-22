<template>
  <v-row align="center" class="px-4 mx-5">
    <v-col cols="12" md="12" align="center">
      <h1></h1>
    </v-col>
    <v-col cols="12" md="12">
      <v-progress-linear value="100"></v-progress-linear>
    </v-col>
    <v-col md="6" class="px-0 mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5">
                Contractor #1
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
                Project Report
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col md="6" class="px-0 mx-auto">
      <v-container>
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="400"
            max-width="750"
            src="https://www.bing.com/images/blob?bcid=ToxblVPJ5F4DhA"
        ></v-img>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5" >
                Add comment
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <h3>Classification</h3>
        <v-progress-linear value="65"></v-progress-linear><v-icon></v-icon>
      </v-container>
    </v-col>
    <v-container>
      <v-row dense>
        <v-col cols="12" align="center">
          <v-btn
              color="gray"
              elevation="2"
              plain to="/controlmenu"
          >Back</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: "FinalProject"
}
</script>

<style scoped>

</style>