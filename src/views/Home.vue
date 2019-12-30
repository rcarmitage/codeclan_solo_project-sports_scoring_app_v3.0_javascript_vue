<template>
  <div id="app">
    <Teams v-bind:teams="teams" />
  </div>
</template>

<script>
import Teams from '../components/Teams.vue'

export default {
  name: 'Home',
  components: {
    Teams
  },
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "TestTeam01"
        },
        {
          id: 2,
          name: "TestTeam02"
        },
        {
          id: 3,
          name: "TestTeam03"
        }
      ]
    }
  }
}
</script>

<style>

</style>
