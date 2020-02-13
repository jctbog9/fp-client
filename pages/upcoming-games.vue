<template>
  <div id="gamesContainer">
      <ul class="sub-nav">
        <li>
          <router-link to="/games/category/nfl">Upcoming NFL Games</router-link>
        </li>
        <li>
          <router-link to="/games/category/college">Upcoming College Football Games</router-link>
        </li>
      </ul>
    <div class="row">
      <div class="column">
        <transition
          name="fade"
          mode="out-in">
          <router-view class="view"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
#gamesContainer {
  margin: 10px 16% 0 16%;
}

#gamesContainer li {
  margin-right: 20px;
}
</style>