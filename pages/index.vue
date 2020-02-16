<template>
  <div id="landingContainer">
    <div class="home-header">
      Leading the Way Forward in Football Analysis
    </div>
    <div class="featured-section">
      <feature-slider
        :slides="carouselSlides"
      />
      <div class="latest-container">
        <div class="red-title">
          LATEST
        </div>
        <div>
          <div v-for="post in otherLatestPosts" v-bind:key="post.id" class="latest-post">
            <div class="post-title">
              {{ truncate(post.title, 'title') }}
            </div>
            <div class="post-subtitle">
              {{ truncate(post.subTitle, 'subtitle') }}
            </div>
            <div v-if="!isLastLatestPost(post)" class="divider"/>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"/>
    <div class="feature-spotlight">
      <div class="feature-column">
        <img src="Icon1.png" class="home-image">
        <div class="feature-column-header">Articles</div>
        <div class="feature-column-content">Dedicated analysis from top NFL insiders.</div>
      </div>
      <div class="feature-column">
        <img src="Icon2.png" class="home-image">
        <div class="feature-column-header">Data Visualization</div>
        <div class="feature-column-content">Leaders in NFL stats analysis and visualization.</div>
      </div>
      <div class="feature-column">
        <img src="Icon3.png" class="home-image">
        <div class="feature-column-header">Live Updates</div>
        <div class="feature-column-content">Live updates and insights that only NFL insiders can provide.</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

import UserNav from '@/components/UserNav'
import FeatureSlider from '@/components/FeatureSlider'

export default {
  components: { FeatureSlider },
  computed: {
    ...mapGetters({
      appData: "appData",
      latestPosts: "blog/latestPosts"
    }),
    carouselSlides() {
      return this.latestPosts.slice(0, 3);
    },
    otherLatestPosts() {
      return this.latestPosts.slice(3, 6);
    },
    currentSlidePost() {
      return this.carouselSlides[this.currentSlide];
    }
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  async asyncData ({store}) {
    await store.dispatch('blog/fetchBlogPosts')
  },
  methods: {
    isLastLatestPost(post) {
      return _.last(this.otherLatestPosts) === post;
    },
    truncate(text, type) {
      if (type === "title" && text.length > 60) {
        return text.slice(0, 59) + "...";
      } else if (type === "subtitle" && text.length > 70) {
        return text.slice(0, 69) + "...";
      } else {
        return text;
      }
    }
  }
};
</script>

<style scoped>
.feature-column-header {
  color: #d50a0a;
  font-family: paralucent, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 15px;
}

.feature-column-content {
  color: black;
  font-family: "Open Sans", sans-serif;
  margin: 0 15%;
  font-size: 1.2em;
}

.home-image {
  height: 134px;
}

.preview-section {
  height: 65px;
  background-color: #013369;
}

.featured-carousel {
  width: 370px;
  height: 210px;
  overflow: hidden;
}

.home-header {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 65px;
  align-items: center;
  text-align: center;
  font-size: 20px;
}

.featured-section {
  display: flex;
  flex-direction: row;
  width: 700px;
  justify-content: space-between;
  overflow: hidden;
  margin: auto;
  margin-bottom: 40px;
}

.slider-title {
  font-size: 18px;
}

.slider-subtitle {
  font-size: 14px;
}

.slider-description-content {
  padding: 20px;
}

.slider-title,
.slider-subtitle {
  color: #ffffff;
}

.red-title {
  letter-spacing: 1.5pt;
  color: #ff0200;
  width: 100%;
  text-align: center;
  padding: 3px 0px;
  font-size: 20px;
  border-top: 2px solid #d50a0a;
  border-bottom: 2px solid #d50a0a;
}

.slider-article-description {
  height: 100%;
  background-color: #013369;
  color: #ffffff;
}

.divider {
  width: 80%;
  margin: 10px auto 0px;
  border-bottom: 1px solid #000000;
}

.post-title {
  font-size: 18px;
}

.post-subtitle {
  font-size: 14px;
}

.post-subtitle,
.post-title {
  color: #013369;
}

.latest-container {
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.latest-post {
  padding: 5px 0px;
}

.row {
  width: 100% !important;
}

.span-image {
  position: relative;
  z-index: -1;
}

.landingImage {
  position: absolute;
  width: 100%;
  height: 360px;
  margin: auto;
  object-fit: cover;
  object-position: 0 -130px;
}

#textOverImage {
  margin: 0 16%;
}

.titleArea h1 {
  padding-top: 0.15em;
  font-family: paralucent, sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 10em;
  line-height: 0.9em;
  color: white;
  text-shadow: 2px 2px 5px black;
}

.logoProgress {
  margin-left: 0.3em;
}

.aboutRow {
  margin-top: 75px;
  text-align: center;
}

.aboutRowSubHeader {
  margin-top: 20px;
}

#landingContainer {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

.feature-spotlight {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}

.feature-column {
  width: 33%;
  display: inline-block;
  text-align: center;
}
</style>
