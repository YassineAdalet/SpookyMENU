<template>
  <div>
    <v-col>
      <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey darken-4" height="100%" :disabled="dishSoldOut">
          <v-progress-linear v-if="dishSoldOut === false" color="orange darken-2" indeterminate  class="mx-auto">
          </v-progress-linear>
          <v-img :aspect-ratio="16 / 9" v-if="dishAvailableTime === 'Lunch'"
            src="https://blog.monouso.fr/wp-content/uploads/ciclo-servicio-bar-restaurante.webp">
            <v-expand-transition>
              <div v-if="hover"
                class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <div>
                  <h5 class="mb-0"> {{ dishAvailableTime }}</h5>
                  <v-spacer></v-spacer>
                  {{ dishPrice }}€
                </div>
              </div>
            </v-expand-transition>
          </v-img>
          <v-img :aspect-ratio="16 / 9" v-if="dishAvailableTime === 'Breakfast'"
            src="https://cdnimg.webstaurantstore.com/uploads/blog/2017/11/breakfast_image3.jpg">
            <v-expand-transition>
              <div v-if="hover"
                class="d-flex transition-fast-in-fast-out yellow darken-4 v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <div>
                  <h5 class="mb-0"> {{ dishAvailableTime }}</h5>
                  <v-spacer></v-spacer>
                  {{ dishPrice }}€
                </div>
              </div>
            </v-expand-transition>
          </v-img>
          <v-img :aspect-ratio="16 / 9" v-if="dishAvailableTime === 'Dinner'"
            src="https://img-3.journaldesfemmes.fr/GskdwZYgPL0Y3oy1mIsgEDAGJOE=/1500x/smart/da169c5e013b4c4b8469a8a290e49805/ccmcms-jdf/15763510.jpg">
            <v-expand-transition>
              <div v-if="hover"
                class="d-flex transition-fast-in-fast-out brown darken-3 v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <div>
                  <h5 class="mb-0"> {{ dishAvailableTime }}</h5>
                  <v-spacer></v-spacer>
                  {{ dishPrice }}€
                </div>
              </div>
            </v-expand-transition>
          </v-img>
          <v-img :aspect-ratio="16 / 9" v-if="dishAvailableTime === 'Brunch'"
            src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/e840ceda-3357-400c-bef3-64e83ec07b16/5dae9c0a-b0f9-4ef3-b36d-31a0d25f4f6d.jpg">
            <v-expand-transition>
              <div v-if="hover"
                class="d-flex transition-fast-in-fast-out teal darken-4 v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <div>
                  <h5 class="mb-0"> {{ dishAvailableTime }}</h5>
                  <v-spacer></v-spacer>
                  {{ dishPrice }}€
                </div>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-6" style="position: relative;">
            <div>
              <v-btn absolute color="red darken-4" text fab large right top class="ml-20"
                @click="$emit('delete-menu', dishId)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <EditPlate :dishId="dishId" :dishName="dishName" :dishDescription="dishDescription"
                :dishCategory="dishCategory" :dishPrice="dishPrice" :dishAvailability="dishAvailableTime"
                :dishCount="dishCount" :dishPrepareTime="dishPreparationTime" :dishSoldOut="dishSoldOut"
                @update-menu="update" />
            </div>

            <h3 class="text-h4 text-uppercase font-weight-light orange--text mb-2  ">
              {{ dishName }}
            </h3>
            <div class="font-weight-light text-capitalize text-h6 mb-2">
              {{ dishDescription }}
            </div>
            <div class="text-center">
              <v-chip dark class="font-weight-light blue-grey--text text-h6 mt-2">
                {{ dishCategory }}
              </v-chip>
              <v-chip dark class="font-weight-light blue-grey--text text-h6 mt-2 mx-4">
                <v-icon left color="blue-grey lighten-1">
                  mdi-clock
                </v-icon> {{ dishPreparationTime }}min
              </v-chip>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
          </v-card-actions>
          <v-progress-linear v-if="dishSoldOut === false" color="orange darken-2" indeterminate reverse class="mx-auto">
          </v-progress-linear>
        </v-card>
      </v-hover>
      <v-switch class="mx-2" v-model="dishSoldOut" inset color="blue-grey lighten-1">
      </v-switch>
    </v-col>
  </div>
</template>

<script>
import EditPlate from "./EditPlate";

export default {
  props: [
    "id",
    "plateName",
    "plateDescription",
    "plateCategory",
    "plateAvailableTime",
    "platePrice",
    "platePreparationTime",
    "plateCount",
    "plateSoldOut",
  ],
  emits: ["delete-menu", "update-menu"],
  components: {
    EditPlate,
  },
  data() {
    return {
      dishId: this.id,
      dishName: this.plateName,
      dishDescription: this.plateDescription,
      dishCategory: this.plateCategory,
      dishAvailableTime: this.plateAvailableTime,
      dishPrice: this.platePrice,
      dishPreparationTime: this.platePreparationTime,
      dishCount: this.plateCount,
      dishSoldOut: false,
    };
  },
  methods: {
    // design() {
    //   if (this.dishAvailableTime === "Breakfast")
    //   {this.src="https://cdnimg.webstaurantstore.com/uploads/blog/2017/11/breakfast_image3.jpg";}
    //   else if (this.dishAvailableTime === "Brunch") {
    //     this.src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/e840ceda-3357-400c-bef3-64e83ec07b16/5dae9c0a-b0f9-4ef3-b36d-31a0d25f4f6d.jpg";
    //   }
    //   else if (this.dishAvailableTime === "Lunch") {
    //     this.src="https://blog.monouso.fr/wp-content/uploads/ciclo-servicio-bar-restaurante.webp";
    //   }
    //   else { this.src="https://img-3.journaldesfemmes.fr/GskdwZYgPL0Y3oy1mIsgEDAGJOE=/1500x/smart/da169c5e013b4c4b8469a8a290e49805/ccmcms-jdf/15763510.jpg"}
    // },
    update(
      id,
      name,
      description,
      category,
      menuAvailableTime,
      price,
      preparationTime,
      count,
      soldOut
    ) {
      this.dishId = id;
      this.dishName = name;
      this.dishDescription = description;
      this.dishCategory = category;
      this.dishAvailableTime = menuAvailableTime;
      this.dishPrice = price;
      this.dishPreparationTime = preparationTime;
      this.dishCount = count;
      this.dishSoldOut = soldOut;

      this.$emit(
        "update-menu",
        this.dishId,
        this.dishName,
        this.dishDescription,
        this.dishCategory,
        this.dishAvailableTime,
        this.dishPrice,
        this.dishPreparationTime,
        this.dishCount,
        this.dishSoldOut,
      );
    },
  },
  //breakfast
  //src="https://cdnimg.webstaurantstore.com/uploads/blog/2017/11/breakfast_image3.jpg"
  // BRUNCH
  // src="https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/e840ceda-3357-400c-bef3-64e83ec07b16/5dae9c0a-b0f9-4ef3-b36d-31a0d25f4f6d.jpg"
  //Lunch
  //src="https://blog.monouso.fr/wp-content/uploads/ciclo-servicio-bar-restaurante.webp"
  //Dinner
  //src="https://img-3.journaldesfemmes.fr/GskdwZYgPL0Y3oy1mIsgEDAGJOE=/1500x/smart/da169c5e013b4c4b8469a8a290e49805/ccmcms-jdf/15763510.jpg"
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>