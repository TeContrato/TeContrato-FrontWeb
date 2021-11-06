<template>
  <v-flex md6>
    <v-card class="mx-auto"  max-width="1000" rounded   >
      <v-card-title> <v-avatar color="primary"
                               size="60"
                               tile>AAA </v-avatar> Empresa #1 </v-card-title>

      <v-card-subtitle> <v-icon small >mdi-earth</v-icon> Hoy</v-card-subtitle>

      <v-card-text>
        <h4> Offer #1</h4>
        <p>ipsum dolor sit amet, consectetur adipisicing elit.
        Amet at ipsum magni neque numquam odio perferendis quis sunt?
        Accusamus amet assumenda cumque dolor earum inventore, minus non
        quis repellendus temporibus!
        </p>
      </v-card-text>
      <v-card-actions >
        Payment: 500$
        <v-spacer></v-spacer>
        <v-btn rounded>Contact</v-btn>
        <v-btn rounded>Postulate</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "offers-dashboard"
}
</script>

<style scoped>

</style>
