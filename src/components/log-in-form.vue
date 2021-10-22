<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card width="500">
        <v-card-text>
          <v-form>
            <v-text-field
                label="Email"
            >
            </v-text-field>
            <v-text-field
                label="Password"
                type="password">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn small color="primary" right to="/dashboard">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "log-in-form"
}
</script>

<style scoped>

</style>
