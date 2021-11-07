<template>
  <v-row align="center" class="px-4 mx-5">
    <v-col md="6" class="px-0 mx-auto" align="center">
      <v-container>

      </v-container>
      <v-container>

      </v-container>
      <v-container>

      </v-container>
      <v-container>
        <v-img
            height="400"
            width="400"
            src="@/assets/constructor.png"
        ></v-img>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12" align="center">
            <v-btn
                color="primary"
                elevation="1"
                class="d-flex justify-center"
                width="110"
                plain to="/registerContractor"
            >Contractor</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col md="6" class="px-0 mx-auto" align="center">
      <v-container>

      </v-container>
      <v-container>

      </v-container>
      <v-container>

      </v-container>
      <v-container>
        <v-img
            height="400"
            width="450"
            src="@/assets/house.png"
        ></v-img>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12" align="center">
            <v-btn
                color="primary"
                elevation="1"
                class="d-flex justify-center"
                width="110"
                plain to="/registerOwner"
            >Owner</v-btn>
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
              plain to="/"
          >Back</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>





<script>
export default {
  name: "register"
}
</script>
<style scoped>
</style>
