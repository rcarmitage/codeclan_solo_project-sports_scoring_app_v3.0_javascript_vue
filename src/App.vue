<template>
  <div id="app">
    <Homepage />
    <Teams v-bind:teams="teams" />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Teams from './components/Teams.vue'

export default {
  name: 'app',
  components: {
    Homepage,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  --primary-blue: #0c80d0;
  --dark-blue: #005B9A;
  --dark: #333;
  --light-blue: #3385ff;
  --light: #fff;
  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}

/* html {
  box-sizing: border-box;
  color: var(--dark);
} */

body {
  background: #abcad6;
  margin: 30px 50px;
  line-height: 1.4;
}

@media screen {
  /* .header-title {
    font-size: 3rem;
    text-align: left;
    grid-area: header-title;
    margin: 0;
  } */

  .inspired-by-codeclan {
    font-size: 0.8rem;
    grid-area: inspired-by-codeclan;
    margin: 0;
  }

  .main-nav ul {
    display: grid;
    grid-gap: 10px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(5, 1fr);
  }
  
  .main-nav a {
    background: var(--primary-blue);
    display: block;
    text-decoration: none;
    padding: 0.3rem 0.4rem;
    text-align: center;
    color: var(--dark);
    text-transform: uppercase;
    font-size: 0.9rem;
    box-shadow: var(--shadow);
  }
  
  .main-nav a:hover {
    background: var(--dark);
    color: var(--primary-blue);
  }

}

</style>
