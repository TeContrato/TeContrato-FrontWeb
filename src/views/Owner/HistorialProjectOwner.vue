<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-row align="center" class="px-3 mx-auto">
      <v-col md="11" align="center">
        <h1>Project Historial</h1>
      </v-col>
      <v-col cols="0" md="1" align="left">
        <v-icon
          x-large
          color="blue darken-2"
      >
        mdi-plus
      </v-icon>
      </v-col>
      <v-col md="6" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card height="180">
                <v-card-title class="text-h5">
                  Project Information
                </v-card-title>
                <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary accent-4" plain to="/DetailProject">
                    Details
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card height="180">
                <v-card-title class="text-h5">
                  Project Information
                </v-card-title>
                <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary accent-4" plain to="/DetailProject">
                    Details
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="3" class="px-0 mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-img
                  height="180"
                  width="200"
                  src="https://th.bing.com/th/id/R.147af151e411997eeec3cfda7958bb25?rik=sohSpNvnbydXlA&riu=http%3a%2f%2fwww.flores4you.com%2fblog%2fwp-content%2fuploads%2f275.jpg&ehk=%2b%2fJoG6b5ST6q7%2f0YhDQiNK24EXJUfdr13WXBNzlXcBo%3d&risl=&pid=ImgRaw&r=0"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-img
                  height="180"
                  width="200"
                  src="https://th.bing.com/th/id/OIP.axQ9WpnpbJ1fkxWF8mEZlgHaEv?pid=ImgDet&rs=1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-container>
        <div class="text-center">
          <v-pagination
              v-model="page"
              :length="6"
          ></v-pagination>
        </div>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import NavigationBar from "../../components/navigation-bar";
export default {
  name: "HistorialProjectOwner",
  components:{
    NavigationBar,
  },
  data () {
    return {
      page: 1,
    }
  },
}
</script>

<style scoped>

</style>