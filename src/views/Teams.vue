<template>
  <div class="teams">
    <Teams v-bind:teams="teams" />
  </div>
</template>

<script>
import Teams from '../components/Teams.vue'

export default {
  name: 'Teams',
  components: {
    Teams
  }
}
</script>

<style>

</style>
