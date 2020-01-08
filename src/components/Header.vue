<template>
    <div>
    <h1>Ultimate Hackathon League</h1>
    <h2 class="inspired-by-codeclan">Inspired by CodeClan</h2>
    <div id="nav">
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/teams" class="btn">Teams</router-link>
      <router-link to="/fixtures" class="btn">Fixtures</router-link>
      <router-link to="/league_table" class="btn">League Table</router-link>
      <router-link to="/about" class="btn">About</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

</style>