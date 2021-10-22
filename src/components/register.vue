<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="justify-center" align="center" width="500">
        <v-radio-group class="justify-center"
                       v-model="row"
                       row
        >
          <v-radio
              label="Contratista"
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Propietario"
              value="radio-2"
          ></v-radio>
        </v-radio-group>
        <v-card-text>
          <v-form>
            <v-text-field
                label="Username"
            >
            </v-text-field>
            <v-text-field
                label="Password"
                type="password">
            </v-text-field>
            <v-text-field
                label="E-mail"
            >
            </v-text-field>
            <v-text-field
                label="Phone"

            >
            </v-text-field>
            <v-text-field
                label="Name"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center" align="center">
          <v-btn small color="primary" right >Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "register"
}
</script>

<style scoped>

</style>
