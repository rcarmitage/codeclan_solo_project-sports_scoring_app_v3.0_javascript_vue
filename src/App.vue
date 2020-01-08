<template>
  <div id="app">
    <Header />
    <router-view/>
    <p id="footer">&copy; 2020 Made by Rob</p>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: "app",
  components: {
    Header
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
  /* display: flex;
  flex-direction: column;
  height: 100%; */
}

html, body {
  background: #abcad6;
  margin: 30px 50px;
  line-height: 1.4;
  height: 100%;
}

.btn {
  background: var(--primary-blue);
  text-decoration: none;
  padding: 1rem 1.5rem;
  text-align: left;
  color: var(--dark);
  font-size: 0.9rem;
  box-shadow: var(--shadow);
}
  
.btn:hover {
  background: var(--dark);
  color: var(--primary-blue);
}

.inspired-by-codeclan {
  font-size: 0.8rem;
  grid-area: inspired-by-codeclan;
  margin: 0;
}

#nav {
  display: grid;
  grid-gap: 10px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(5, 1fr);
}

#footer {
  /* flex-shrink: 0; */
}

</style>
