<template>
  <v-app>
    <v-flex md6>
      <v-card class="mx-auto"  max-width="1000" rounded v-for="offers in offers" :key="offers.id"  >

        <v-card class="mt-5" max-width="1000">

          <v-card-title> <v-avatar color="primary" size="60" tile>{{ offers.tile }}</v-avatar>
            {{ offers.company }} </v-card-title>
          <v-card-subtitle> <v-icon small >mdi-earth</v-icon> {{offers.finish_Date}}</v-card-subtitle>
          <v-card-text>
            <h4> Offer {{offers.id}} Price {{offers.price}}</h4>
            <p>{{offers.description}}
            </p>
          </v-card-text>
          <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn rounded>Contact</v-btn>
            <v-btn rounded>Postulate</v-btn>
          </v-card-actions>

        </v-card>

      </v-card>
    </v-flex>
    <navigation-bar></navigation-bar>
  </v-app>
</template>

<script>
import OffersApiService from "../services/offers-api-service";
import NavigationBar from "../components/navigation-bar";
export default {
  name: "offers",
  data(){
    return{
      offers:[]
    }
  },
  components:{
    NavigationBar,

  },
  methods:{
    retrieveOffers() {
      OffersApiService.getAll()
          .then(response => {
            this.offers = response.data;
            this.displayOffers = response.data.map(this.getDisplayOffer);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayOffer(offer) {
      return {
        id: offer.id,
        tile: offer.tile,
        company:offer.company,
        description: offer.description,
        price: offer.price,
        finish_Date:offer.finish
      };
    }
  },
  mounted() {
    this.retrieveOffers();
  }
}
</script>

<style scoped>

</style>
