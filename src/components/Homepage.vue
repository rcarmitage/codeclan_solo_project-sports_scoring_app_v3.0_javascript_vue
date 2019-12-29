<template>
    <div>
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
export default {
    name: 'Homepage',
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>