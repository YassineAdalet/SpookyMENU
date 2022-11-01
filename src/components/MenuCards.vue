<template>
  <v-container>
    <AddPlate @add-menu="insertNewMenu" />
    <v-row>
      <v-col cols="12" lg="4" sm="3" xs="2" v-for="menuItem in menuItems" :key="menuItem._id">
        <PlateCard :id="menuItem._id" :plateName="menuItem.name" :plateDescription="menuItem.description"
          :plateCategory="menuItem.category" :plateAvailableTime="menuItem.availableTime" :platePrice="menuItem.price"
          :platePreparationTime="menuItem.preparationTime" :plateCount="menuItem.count" @delete-menu="deleteMenu"
          @update-menu="updateMenu" />
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import AddPlate from "./AddPlate";
import PlateCard from "./PlateCard";
import MenuService from "../service/MenuService";
import MenuModel from "../model/dishes";
export default {
  name: "MenuLists",
  components: {
    AddPlate,
    PlateCard,
  },
  data: () => ({
    menuItems: [],
    error: "",
  }),
  methods: {
    async insertNewMenu(
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count,
      soldOut,
    ) {
      const plateInfos = new MenuModel(
        name,
        description,
        category,
        availableTime,
        price,
        preparationTime,
        count,
        soldOut,
      );

      await MenuService.addMenu(
        plateInfos.name,
        plateInfos.description,
        plateInfos.category,
        plateInfos.availableTime,
        plateInfos.price,
        plateInfos.preparationTime,
        plateInfos.count,
        plateInfos.soldOut
      );
      this.menuItems = await MenuService.getMenu();
    },
    async deleteMenu(id) {
      await MenuService.deleteMenu(id);
      this.menuItems = await MenuService.getMenu();
    },
    async updateMenu(
      id,
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count,
      soldOut,
    ) {
      const plateInfos = new MenuModel(
        name,
        description,
        category,
        availableTime,
        price,
        preparationTime,
        count,
        soldOut
      );
      await MenuService.updateMenu(
        id,
        plateInfos.name,
        plateInfos.description,
        plateInfos.category,
        plateInfos.availableTime,
        plateInfos.price,
        plateInfos.preparationTime,
        plateInfos.count,
        plateInfos.soldOut
      );
      this.menuItems = await MenuService.getMenu();
    },
  },

  async created() {
    try {
      this.menuItems = await MenuService.getMenu();
      console.log(this.menuItems);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
  