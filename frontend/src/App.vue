<template>
<v-app dark>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>ICARUS </span>
      <span class="font-weight-light">STREAM PLATFORM</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest Release</span>
    </v-btn>
  </v-toolbar>

  <v-content>
    <Home/>
  </v-content>
</v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      //
    }
  }
}
</script>
