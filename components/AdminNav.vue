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
        <div :class="'dropdown ' + isActive" v-on:mouseleave="hideMenu" v-on:mouseenter="showMenu">
          <div>
            <div class="nav-item">
              Notes V
            </div>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <nuxt-link to="/notes/mynotes" class="dropdown-item">
                New Note
              </nuxt-link>
              <nuxt-link to="/notes/newnote" class="dropdown-item">
                My Notes
              </nuxt-link>
              <nuxt-link to="/notes/sharednotes" class="dropdown-item">
                Shared With Me
              </nuxt-link>
            </div>
          </div>
        </div>
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
    <div class="nav-right" v-on:click="handleLogout">
      Logout
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminNav',
  data() {
    return {
      displayDropdown: false,
      menuItems: [
        {
          id: 1,
          title: 'New Note',
          url: '/newnote'
        },
        {
          id: 2,
          title: 'My Notes',
          url: '/mynotes'
        },
        {
          id: 3,
          title: 'Shared Notes',
          url: '/sharednotes'
        }
      ],
      isActive: ''
    }
  },
  methods: {
    handleLogout () {
      this.$store.dispatch('loginOrLogout')
    },
    showOrHide () {
      if (this.isActive === '') {
        this.isActive = 'is-active'
      } else {
        this.isActive = ''
      }
    },
    hideMenu () {
      this.isActive = ''
    },
    showMenu () {
      this.isActive = 'is-active'
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
