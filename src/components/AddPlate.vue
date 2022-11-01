<template>
    <v-dialog v-model="dialog" persistent transition="dialog-bottom-transition" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="black--text blue-grey lighten-1 mx-4" v-bind="attrs" v-on="on" left >
                Add Plate
            </v-btn>
        </template>
        <v-card color="grey darken-2">
            <v-card-title>
                <span class="text-h5">Add plate to menu</span>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" v-model="valid" ref="form" >
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
                            <v-autocomplete :items="itemsCategory"
                                label="Category *" required chips v-model="plateCategory"
                                :rules="[v => !!v || 'Please choose Category!']" color="blue-grey lighten-1">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete :items="itemsPlateAvailable"
                                label="What are we eating *" required chips v-model="plateAvailableTime"
                                :rules="[v => !!v || 'Please choose type!']" color="blue-grey lighten-1">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Price (€) *" required type="number" v-model="platePrice"
                                :rules="[v => !!v || 'Please enter the price!']" color="blue-grey lighten-1">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Await (Min) *" required type="number" v-model="platePreparationTime"
                                :rules="[v => !!v || 'this field is required!']" min=0 max=60
                                oninput="if(Number(this.value) > Number(this.max)) this.value = this.max;"
                                color="blue-grey lighten-1">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
                <small class="mt-4">* indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="ml-1" color="red darken-4" text @click="closeModel">
                    Close
                </v-btn>
                <v-btn class="mx-1" color="green darken-1" @click="addMenu" text :disabled="!valid">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
 
<script>
export default {
    emits: ["add-menu"],

    data() {
        return {
            valid: false,
            dialog: false,
            availableMenu: '',
            plateName: "",
            plateDescription: "",
            plateCategory: "",
            plateAvailableTime: "",
            platePrice: "",
            platePreparationTime: "",
            plateType: "",
            plateSoldOut: true,
            itemsCategory : ['Starter', 'Main course', 'Dessert', 'Beverage'],
            itemsPlateAvailable :['Breakfast', 'Brunch', 'Lunch', 'Dinner'],
        };
    },
    methods: {
        closeModel() {
            this.plateName ="";
            this.plateDescription = "";
            this.plateCategory = "";
            this.platePrice = "";
            this.plateAvailableTime = "";
            this.platePreparationTime="";
            this.dialog = false;
            this.$refs.form.resetValidation()
        },
        addMenu() {
            this.$emit(
                "add-menu",
                this.plateName,
                this.plateDescription,
                this.plateCategory,
                this.plateAvailableTime,
                this.platePrice,
                this.platePreparationTime,
                this.plateType,
            );
            this.plateName = "";
            this.plateDescription = "";
            this.plateCategory = "";
            this.plateAvailableTime = "";
            this.platePrice = "";
            this.platePreparationTime = "";
            this.plateType = "";
            this.dialog = false;
            this.$refs.form.resetValidation()
        },
    },
};
</script>
  
<style>

</style>
  