<template>
    <div>
        <h3>Teams</h3>
        <!-- Add team button, list all teams, edit and delete team buttons next to each team -->
        <a class="btn">Add a Team</a>
        <div v-bind:key="team.id" v-for="team in teams">
            <h4>{{team.name}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Teams',
    props: ["teams"]
}
</script>

<style scoped>

</style>