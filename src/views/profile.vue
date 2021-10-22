<template>
<v-app>
  <v-flex>
    <v-container grid-list-md panels>
      <v-layout row wrap ra>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg"></v-img>
              <v-row justify="space-around">
                <v-avatar color="white" size="90" class="avatar">
                  <img src="https://cdn.pixabay.com/photo/2019/08/06/08/18/man-4387681_960_720.jpg" alt="user">
                </v-avatar>
              </v-row>
            <v-card-title class="justify-center">
              <h4>James Gouse</h4>
            </v-card-title>
            <v-card-subtitle class="text-center">
              UX/UI Designer
            </v-card-subtitle>
            <v-card-text>
            <v-item-group >
              <v-container>
                <v-row class="text-center justify-center info-profile">
                  <v-col>  
                    <h2>400</h2>
                    <p>Followers</p>
                  </v-col>
                  <v-col>
                    <h2>4</h2>
                    <p>Certificates</p>
                  </v-col>
                  <v-col>
                    <h2>5</h2>
                    <p>Year Experience</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
            </v-card-text>
            <v-card-actions>
              <v-item-group >
              <v-container>
                <v-row class="text-center justify-center info-profile">
                  <i class="fab fa-facebook"></i>
                </v-row>
              </v-container>
              </v-item-group>
                  <v-container>
                <v-row class="text-center justify-center info-profile">
                   <v-btn depressedelevation="6" rounded large color=#6610f2 class="text-white but-edit">edit</v-btn>
                </v-row>
              </v-container>
            
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6>
         <v-card class="publications"> 
           <v-card-title class="justify-center text-center" >
             <h2>Publications</h2>
           </v-card-title>
          <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-card-actions>
       <v-item-group >
              <v-container>
                <v-row class="text-center justify-center info-profile">
                  <i class="fab fa-facebook"></i>
                </v-row>
              </v-container>
              </v-item-group>
                  <v-container>
                <v-row class="text-center justify-center info-profile">
                   <v-btn depressedelevation="6" rounded large color=#6610f2 class="text-white but-edit">new publication</v-btn>
                </v-row>
              </v-container>
    </v-card-actions>
  </v-card>
        </v-flex>
        
        <v-flex xs12 sm6>
          <v-card>
            <v-card-text>
              <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          md="6"
        >
          <v-item >
            <v-card
              :color="active ? 'primary' : '#e9ecef'"
              class="d-flex align-center justify-center"
              height="100"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div >
                  <h5>Figma</h5>

                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
            </v-card-text>
            <v-card-actions>
              <v-item-group >
              <v-container>
                <v-row class="text-center justify-center info-profile">
                  <i class="fab fa-facebook"></i>
                </v-row>
              </v-container>
              </v-item-group>
                  <v-container>
                <v-row class="text-center justify-center info-profile">
                   <v-btn depressedelevation="6" rounded large color=#6610f2 class="text-white but-edit">edit</v-btn>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
  <navigation-bar></navigation-bar>
  </v-app>
</template>

<script>
import NavigationBar from "../components/navigation-bar";
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
