<template>
  <div class="header">
    <div class="left-nav">
      <nuxt-link class="logo" to="/">
        <div>Forward</div>
        <div class="progress">Progress</div>
      </nuxt-link>
      <div class="nav-items">
        <nuxt-link to="/" class="nav-item">
          Home
        </nuxt-link>
        <nuxt-link to="/blog" class="nav-item">
          Blog
        </nuxt-link>
        <nuxt-link to="/about-us" class="nav-item">
          About Us
        </nuxt-link>
        <nuxt-link to="/upcoming-games" class="nav-item">
          Upcoming Games
        </nuxt-link>
      </div>
    </div>
    <div class="nav-right" v-on:click="handleLogin">
      Login
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
  methods: {
    handleLogin() {
      this.$store.dispatch('loginOrLogout')
    }
  }
}
</script>

<style>
.nav-item {
  color: #D1D5DA;
}

.nav-item:hover,
.nav-item:focus {
  color: #FFFFFF;
}

.nav-item:focus {
  font-weight: bold;
}

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

.logo,
.logo:hover {
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
