<template>
<app>
  <navigation-bar></navigation-bar>
  <v-row align="center" class="px-4 mx-5">
    <v-col cols="8" md="12" >
      <h1>Setting</h1>
    </v-col>
    <v-col md="6" class="px-2 mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  Notifications
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  Privacy
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  Payment method
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  Security
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  Advanced configuration
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="9">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-title class="text-h6">
                  About TeContrato
                </v-card-title>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col md="6" class="px-0 mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="3">
            <v-card height="85" elevation="0">
              <v-container
                  class="px-0"
                  fluid
                  align="center"
              >
                <v-switch
                    v-model="switch1"
                ></v-switch>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card height="85" elevation="0">
              <v-container fluid>
                <v-row align="center">
                  <v-col
                      class="d-flex"
                      cols="8"
                      sm="4"
                  >
                    <v-select
                        :items="items"
                        filled
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-btn
                    color="grey"
                    elevation="2"
                    plain to="/PaymentMethod"
                >Look more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-btn
                    color="grey"
                    elevation="2"
                >Look more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-btn
                    color="grey"
                    elevation="2"
                >Look more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card height="85" elevation="0">
              <v-card-actions>
                <v-btn
                    color="grey"
                    elevation="2"
                >Look more</v-btn>
              </v-card-actions>
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
              plain to="/dashboard"
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
    data1 () {
      return {
        switch1: true,
        switch2: false,
      }
    },
  name: "Configuration",
  components:{
    NavigationBar,
  },
    data: () => ({
      items: ['Public', 'Private'],
      switch1:true,
    }),
}
</script>

<style scoped>

</style>