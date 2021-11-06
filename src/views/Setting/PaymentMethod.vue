<template>
  <app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="8" md="12" >
        <h1>Payment method</h1>
      </v-col>
      <v-col md="6" class="px-2 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="9">
              <v-card height="150" elevation="0">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-img
                      height="130"
                      width="2"
                      src="@/assets/visa.jpg"></v-img>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="9">
              <v-card height="150" elevation="0">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-img
                      height="135"
                      width="2"
                      src="@/assets/mastercard.jpg"></v-img>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="9">
              <v-card height="150" elevation="0">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-img
                      height="120"
                     width="20"
                      src="@/assets/club.jpg"></v-img>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="6" class="px-0 mx-auto">
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

        </v-container>
        <v-container>

        </v-container>
        <v-container>

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

        </v-container>
        <v-container>

        </v-container>
        <v-container>

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

        </v-container>
      </v-col>
      <v-container>
        <v-row dense>
          <v-col cols="12" align="center">
            <v-btn
                color="gray"
                elevation="2"
                plain to="/Configuration"
            >Back</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </app>
</template>

<script>
import NavigationBar from "@/components/navigation-bar";
export default {
  name: "PaymentMethod",
  components:{
    NavigationBar,
  },
}
</script>

<style scoped>

</style>