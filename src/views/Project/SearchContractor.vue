<template>
  <v-row align="center" class="px-3 mx-auto">
    <v-col cols="12" md="4"><h1>Filters</h1></v-col>
    <v-col cols="12" md="6">
      <v-spacer></v-spacer>
      <v-text-field v-model="title"
                    label="Keyword"
                    single-line hide-details></v-text-field>
    </v-col>
    <v-btn
        color="primary"
        elevation="2"
    >Search</v-btn>
    <v-col cols="3" md="3" align="center" class="px-3 mx-auto">
      <v-container fluid>
        <v-row
            align="center"
        >
          <v-col cols="">
            <v-autocomplete
                v-model="value1"
                :items="specialty"
                dense
                filled
                label="Specialty"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row
            align="center"
        >
          <v-col cols="">
            <v-autocomplete
                v-model="value2"
                :items="location"
                dense
                filled
                label="location"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row
            align="center"
        >
          <v-col cols="">
            <v-autocomplete
                v-model="value3"
                :items="years"
                dense
                filled
                label="Years of Work Experience"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row
            align="center"
        >
          <v-col cols="">
            <v-autocomplete
                v-model="value4"
                :items="classification"
                dense
                filled
                label="Classification"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row
            align="center"
        >
          <v-col cols="">
            <v-autocomplete
                v-model="value5"
                :items="price"
                dense
                filled
                label="Estimated price range"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col md="6" class="px-0 mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5">
                Contractor Information
              </v-card-title>
              <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
              <v-card-actions>
                <v-btn text color="primary accent-4" plain to="/profilecontractor">
                  Look
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5">
                Contractor Information
              </v-card-title>
              <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
              <v-card-actions>
                <v-btn text color="primary accent-4" plain to="/profilecontractor">
                  Look
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5">
                Contractor Information
              </v-card-title>
              <v-card-text>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-text>
              <v-card-actions>
                <v-btn text color="primary accent-4" plain to="/profilecontractor">
                  Look
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
                src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
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
                src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
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
                src="https://www.bing.com/images/blob?bcid=ToAVZmeLKF4DZQ"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-container>
      <v-row dense>
        <v-col cols="12" align="center">
          <v-btn
              color="gray"
              elevation="2"
              plain to="/"
          >Back</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>


<script>


</script>
<script>
export default {
  data: () => ({
    specialty: ['Installation', 'Carpentry', 'Plumbing', 'Locksmith','Electrical technician','Brickwork','Painting','Construction'],
    values1: ['Installation', 'Carpentry', 'Plumbing', 'Locksmith','Electrical technician','Brickwork','Painting','Construction'],
    value1: null,
    location: ['San Isidro', 'Monterrico', 'Miraflores', 'La Molina'],
    values2: ['San Isidro', 'Monterrico', 'Miraflores', 'La Molina'],
    value2: null,
    years: ['1 a 2', '2 a 3', '3 a 5'],
    values3: ['1 a 2', '2 a 3', '3 a 5'],
    value3: null,
    price: ['100 a 300', '300 a 500', '500 a más'],
    values5: ['100 a 300', '300 a 500', '500 a más'],
    value5: null,
  }),
}
</script>

<style scoped>

</style>

