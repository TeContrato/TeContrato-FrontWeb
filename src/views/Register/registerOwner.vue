<template>
  <v-card
      class="mx-auto my-2"
      max-width="700"
      elevation="0"
  >
    <v-img
        class="align-end"
        height="225"
        width="800"
        src="@/assets/register-house.png"
    ></v-img>
    <v-card-title class="text-h4 justify-center">
      Owner
    </v-card-title>
    <v-card-actions class="d-flex justify-center mb-1">
      <v-form class="action">
        <v-container fluid>
          <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Owner name"
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
          <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 8 characters"
              value=""
              class="input-group--focused"
              @click:append="show2 = !show2"
          ></v-text-field>
          <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules1.required, rules1.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-2"
              label="Repeat Password"
              hint="At least 8 characters"
              value=""
              class="input-group--focused"
              @click:append="show1 = !show1"
          ></v-text-field>
        </v-container>
      </v-form>
    </v-card-actions>
    <v-card-actions class="d-flex justify-center mb-2">
      <v-btn
          color="primary"
          elevation="1"
          class="d-flex justify-center"
          width="150"
      >Attach photo</v-btn>
    </v-card-actions>
    <v-card-actions class="d-flex justify-center mb-2">
      <v-btn
          color="grey"
          elevation="1"
          class="d-flex justify-center"
          width="150"
          plain to="/register"
      >Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn
          color="grey"
          elevation="1"
          class="d-flex justify-center"
          width="150"
          plain to="/dashboard"
      >Continue</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "registerOwner",
  data () {
    return {
      show1: false,
      show2: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      password1: 'Password',
      rules1: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The 2 passwords you entered don't match`),
      },
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => /.+@.+\..+/.test(v) || 'Name must be valid',
      ],
    }
  },
}
</script>

<style scoped>

</style>