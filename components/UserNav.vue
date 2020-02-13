<template>
  <div class="header">
    <div class="left-nav">
      <div class="logo">
        <div>Forward</div>
        <div class="progress">Progress</div>
      </div>
      <div class="nav-items">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
        <nuxt-link to="/about-us">
          About Us
        </nuxt-link>
        <nuxt-link to="/upcoming-games">
          Upcoming Games
        </nuxt-link>
      </div>
    </div>
    <div class="nav-right">
      Login
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNav'
}
</script>

<style>
.progress {
  margin-left: 10px;
  height: 26px;
}

.left-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header {
  width: 100%;
  height: 50px;
  background-color: #013369;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.logo {
  padding: 5px 10px;
  font-family: paralucent, sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 18px;
  color: white;
  line-height: 1em;
  letter-spacing: 0.05em;
}
 .right-nav {
   display: flex;
   flex-direction: row;
   width: 500px;
   justify-content: flex-end;
 }

 .nav-items {
   display: flex;
   flex-direction: row;
   width: 360px;
   justify-content: space-evenly;
 }
</style>