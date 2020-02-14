<template>
  <div class="menu">
    <ul v-if="!isShowsDropdown">
      <li v-for="link in (links)" class="menu-item">
        <div class="menu-item__body">
          <nuxt-link :to="link.url" class="menu-item__link">
            <span v-html="link.title" />
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dropdown',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 999;
  background: $dark-brown;
}
.menu-item {
  &:first-of-type {
    padding-top: 8px;
  }
  &:last-of-type {
    margin-bottom: 8px;
  }
}
.menu-item__link {
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  font-size: 18px;
  font-family: cabin;
  color: RGBA(255, 255, 255, 0.6);
  &:hover {
    color: white;
  }
}
.shows-category {
  color: #666666;
  margin: 10px 16px 0 16px;
  font-size: 18px;
  font-family: oswald;
}
</style>