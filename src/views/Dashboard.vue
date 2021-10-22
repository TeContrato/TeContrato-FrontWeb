<template>
  <v-app>
        <v-container>
      <h1>Hello Lenin, What do you want to do today?</h1>

      <v-layout wrap justify-space-between >
        <v-flex xs12 md6 offset-(size)(0-12) >
          <v-card>
            <v-card-title>Notifications</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>Who visited your profile?</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>Projects available</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>Projects almost finish</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>Messages</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>Last project listed</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </v-card-text>
            <v-card-actions ><v-btn small color="primary" right >see all</v-btn></v-card-actions>
          </v-card>
        </v-flex>


      </v-layout>
    </v-container>
    <navigation-bar></navigation-bar>


  </v-app>

</template>

<script>
import appbar from "../components/appbar";
import Navbar from "../components/Navbar";
import OffersDashboard from "../components/offers-dashboard";
import NavigationBar from "../components/navigation-bar";
export default {
  name: "Dashboard.vue",
  components:{
    NavigationBar,
    OffersDashboard,
    appbar,
    Navbar,

  }
}
</script>

<style scoped>
  v-btn {
    position: absolute;
    width: 141px;
    height: 49px;
    left: 23px;
    top: 283px;
  }
</style>
