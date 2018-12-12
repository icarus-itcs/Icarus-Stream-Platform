<template>
<v-container>
  <v-layout text-xs-center wrap>
    <h1> Streams and stuff: </h1>{{streams}}
    <StreamCard></StreamCard>
  </v-layout>
</v-container>
</template>

<script>
import StreamCard from './StreamCard'
import api from '../api';
import xml2js from '../util/xml2js'


export default {
  components: {
    StreamCard
  },
  data() {
    return {
      streams: null
    }
  },
  mounted() {
    api.get('crossdomain.xml').then(response => (this.streams = xml2js(response.data)));

  }
}
</script>

<style>

</style>
