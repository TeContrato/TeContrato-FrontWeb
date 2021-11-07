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
        height="180"
        elevation="0">
          <v-img
              max-height="300"
              max-width="350"
              src="http://fotografolisboa.pt/wp-content/uploads/2018/02/fotos-para-curriculum-vitae.jpg"
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
import NavigationBar from "../../components/navigation-bar";
  export default {
     name: "profile.vue",
  components:{
    NavigationBar,
  },

    data: () => ({
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.pixabay.com/photo/2019/08/06/08/18/man-4387681_960_720.jpg',
          title: 'Brunch this weekend?',
          subtitle: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem natus cupiditate consequatur ducimus beatae ut voluptas architecto ipsam numquam.` ,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.pixabay.com/photo/2019/08/06/08/18/man-4387681_960_720.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, molestias!`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.pixabay.com/photo/2019/08/06/08/18/man-4387681_960_720.jpg',
          title: 'Oui oui',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, praesentium animi. Minima vero magnam corporis quos sint unde aperiam ullam expedita autem molestias iure nam deserunt repudiandae eligendi laboriosam in cum temporibus libero, ducimus provident reiciendis quo voluptatibus! Itaque autem est quasi modi voluptas beatae non debitis quod veniam voluptates.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.pixabay.com/photo/2019/08/06/08/18/man-4387681_960_720.jpg',
          title: 'Birthday gift',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, molestias!',
        }
      ],
      
    }
    )
    ,
  
}
</script>

<style scoped>
.panels{
  padding: 200px;
  margin: auto;
}

.publications{
  padding: 50px;
}
.avatar{
  padding: 50px;
}
.but-edit{
  width: 30%;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: 30px;
}
.info-profile h2{
  color: rgb(88, 139, 197);
}
</style>
