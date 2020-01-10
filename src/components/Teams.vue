<template>
    <div>
        <h3>Teams</h3>
        <!-- Add team button, list all teams, edit and delete team buttons next to each team -->
        <!-- <a class="btn">Add a Team</a> -->
        <div v-bind:key="team.id" v-for="team in teams">
            <TeamDetails v-bind:team="team" />
        </div>
    </div>
</template>

<script>
import TeamDetails from './TeamDetails.vue'

export default {
    name: 'Teams',
    components: {
        TeamDetails
    },
    props: ["teams"],
}
</script>

<style scoped>

</style>