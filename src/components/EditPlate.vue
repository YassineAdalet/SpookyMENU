<template>
  <div>
    <v-dialog v-model="dialog" persistent transition="dialog-bottom-transition" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn absolute color="blue-grey darken-1" text fab large top right class="mr-10" v-bind="attrs" v-on="on">

          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card color="grey darken-2">
        <v-card-title>
          <span class="text-h5">Edit </span>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Plate's name *" required v-model="plateName"
                  :rules="[v => !!v || 'Please enter the name!']" color="blue-grey lighten-1">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Secret spell*" required rows="2" v-model="plateDescription"
                  :rules="[v => !!v || 'Please enter a short description!']" color="blue-grey lighten-1">
                </v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete :items="['Starter', 'Main course', 'Dessert', 'Beverage']" label="Category *" required
                  chips v-model="plateCategory" :rules="[v => !!v || 'Please choose Category!']"
                  color="blue-grey lighten-1">
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete :items="['Breakfast', 'Brunch', 'Lunch', 'Dinner']" label="What are we eating *"
                  required chips v-model="plateAvailableTime" :rules="[v => !!v || 'Please choose type!']"
                  color="blue-grey lighten-1">
                </v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Price (Є) *" required type="number" v-model="platePrice"
                  :rules="[v => !!v || 'Please enter the price!']" color="blue-grey lighten-1">
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Await (Min) *" required type="number" v-model="platePreparationTime"
                min=0 max=60 oninput="if(Number(this.value) > Number(this.max)) this.value = this.max;"
                  :rules="[v => !!v || 'this field is required!']" color="blue-grey lighten-1">
                </v-text-field>
              </v-col>

            </v-row>
          </v-form>
          <small class="mt-4">* indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange " text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="orange " text @click="updateMenu" :disabled="!valid">
            Save
          </v-btn>
          <v-switch class="mx-2" inset color="blue-grey lighten-1" v-model="plateSoldOut" ></v-switch>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: [
    "dishId",
    "dishName",
    "dishDescription",
    "dishCategory",
    "dishPrice",
    "dishAvailability",
    "dishCount",
    "dishPrepareTime",
    "dishSoldOut"
  ],
  emits: ["update-menu"],
  data() {
    return {
      valid: true,
      dialog: false,
      plateId: this.dishId,
      plateName: this.dishName,
      plateDescription: this.dishDescription,
      plateCategory: this.dishCategory,
      plateAvailableTime: this.dishAvailability,
      platePrice: this.dishPrice,
      platePreparationTime: this.dishPrepareTime,
      plateCount: this.dishCount,
      plateSoldOut: this.dishSoldOut,
    };
  },
  methods: {
    updateMenu() {
      this.$emit(
        "update-menu",
        this.plateId,
        this.plateName,
        this.plateDescription,
        this.plateCategory,
        this.plateAvailableTime,
        this.platePrice,
        this.platePreparationTime,
        this.plateCount,
        this.plateSoldOut
      );
      this.dialog = false;
    },
  },
};
</script>

<style>

</style>
