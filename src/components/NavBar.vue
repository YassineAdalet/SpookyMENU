<template>
  <v-app-bar app color="grey darken-4" dark height="78">
    <v-app-bar-title class="mx-auto">
      <h1><span> SPOOKY</span><span class="font-weight-light orange--text">MENU </span></h1>
      <v-progress-linear color="orange darken-2" indeterminate reverse class="mx-auto"></v-progress-linear>
      <v-progress-linear color="orange darken-2" indeterminate class="mx-auto"></v-progress-linear>
    </v-app-bar-title>
  </v-app-bar>
</template>
  
<script>
export default {
  name: 'NavBar',
  data: () => ({
    //
  }),
};
</script>
  