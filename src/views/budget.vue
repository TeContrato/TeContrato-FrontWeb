<template>
  <v-app>
    <v-row align="center" class="px-4 mx-5">
      <v-col cols="120" md="12" align="center">
        <h1>New Budget</h1>
      </v-col>

      <spacer>
      </spacer>
      <v-col   cols="2"
               sm="6"
               md="5">

        <v-text-field label="Project's name">
        </v-text-field>
        <v-text-field label="Description"
        > </v-text-field>
        <v-text-field label="Time"
        > </v-text-field>
        <v-select label="Status"
        ></v-select>
        <v-text-field v-model="name" label="Search by name"></v-text-field>
        <v-btn small @click="searchTitle">
          Search
        </v-btn>
        <v-col>
          <v-card class="mx-auto" tile>
            <v-card-title>Components</v-card-title>

            <v-data-table
                :headers="headers"
                :items="budgets"
                disable-pagination
                :hide-default-footer="true"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
                <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
              </template>
            </v-data-table>

            <v-card-actions v-if="budgets.length > 0">
              <v-btn small color="error" @click="removeAllTutorials">
                Remove All
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-col>

      <v-col cols="8" md="4">

        <div class="submit-form mt-3 mx-auto">
          <p class="headline">Add Material</p>
          <v-img
              height="250"
              src="https://previews.123rf.com/images/grafner/grafner1101/grafner110100114/8676488-un-conjunto-de-un-mont%C3%B3n-de-diferentes-herramientas-y-materiales-de-trabajo.jpg"
          ></v-img>
          <div v-if="!submitted">
            <v-form ref="form" lazy-validation>
              <v-text-field
                  v-model="budget.name"
                  :rules="[(v) => !!v || 'Title is required']"
                  label="name"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="budget.quantity"
                  :rules="[(v) => !!v || 'Description is required']"
                  label="quantity"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="budget.price"
                  :rules="[(v) => !!v || 'Description is required']"
                  label="price"
                  required
              ></v-text-field>
            </v-form>

            <v-btn color="primary" class="mt-3" @click="saveTutorial">Submit</v-btn>
          </div>

          <div v-else>
            <v-card class="mx-auto">
              <v-card-title>
                Submitted successfully!
              </v-card-title>

              <v-card-subtitle>
                Click the button to add new budget.
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="success" @click="newTutorial">Add</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>

      </v-col>



      <navigation-bar></navigation-bar>
    </v-row>
  </v-app>

</template>

<script>
import NavigationBar from "../components/navigation-bar";
import budgetDataService from "../services/budgetDataService";
export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      budgets: [],
      name: "",
      headers: [
        { text: "name", align: "start", sortable: false, value: "name" },
        { text: "quantity", value: "quantity", sortable: false },
        { text: "price", value: "price", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      budget: {
        id: null,
        name: "",
        quantity: "",
        price: "",
      },
      submitted: false,
    };
  },
  methods: {
    retrieveTutorials() {
      budgetDataService.getAll()
          .then((response) => {
            this.budgets = response.data.map(this.getDisplayTutorial);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveTutorials();
    },

    removeAllTutorials() {
      budgetDataService.deleteAll()
          .then((response) => {
            console.log(response.data);
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    searchTitle() {
      budgetDataService.findByTitle(this.name)
          .then((response) => {
            this.budgets = response.data.map(this.getDisplayTutorial);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    editTutorial(id) {
      this.$router.push({ name: "tutorial-details", params: { id: id } });
    },

    deleteTutorial(id) {
      budgetDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTutorial(budget) {
      return {
        id: budget.id,
        name: budget.name.length > 30 ? budget.name.substr(0, 30) + "..." : budget.name,
        quantity: budget.quantity.length > 30 ? budget.quantity.substr(0, 30) + "..." : budget.quantity,
        price: budget.price,
      };
    },

    saveTutorial() {
      var data = {
        name: this.budget.name,
        quantity: this.budget.quantity,
        price: this.budget.price,
      };

      budgetDataService.create(data)
          .then((response) => {
            this.budget.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    newTutorial() {
      this.submitted = false;
      this.budget = {};
    },



  },
  mounted() {
    this.retrieveTutorials();
  },
};

</script>

<style scoped>

</style>
