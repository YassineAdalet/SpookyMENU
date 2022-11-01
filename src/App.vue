<template>
  <v-app>
    <NavBar />
    <v-main class="main">
      <MenuCards />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MenuCards from './components/MenuCards.vue';

export default {
  name: 'App',
  components: {
    MenuCards,
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.main {
  background-color: #424242;
}
</style>
