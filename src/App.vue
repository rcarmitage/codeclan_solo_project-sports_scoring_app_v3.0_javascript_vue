<template>
  <div id="app">
    <!-- <title>Ultimate Hackathon League</title> -->
    <h1>Ultimate Hackathon League</h1>
    <h2 class="inspired-by-codeclan">Inspired by CodeClan</h2>
    <nav class="main-nav">
        <ul>
            <li>
              <a class="btn">Home</a>
            </li>
            <li>
              <a class="btn">Teams</a>
            </li>
            <li>
              <a class="btn">Fixtures</a>
            </li>
            <li>
              <a class="btn">League Table</a>
            </li>
            <li>
              <a class="btn">About</a>
            </li>
        </ul>
    </nav>
    <footer>
        <p>&copy; 2019 Made by Rob</p>
    </footer>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'app',
  components: {
    Homepage
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

html {
  box-sizing: border-box;
  color: var(--dark);
}

body {
  background: #abcad6;
  margin: 30px 50px;
  line-height: 1.4;
}

@media screen {
  .header-title {
    font-size: 3rem;
    text-align: left;
    grid-area: header-title;
    margin: 0;
  }

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
