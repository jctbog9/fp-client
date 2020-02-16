<template>
  <div class="custom-carousel">
    <div class="featured-image-area">
      <div class="arrow-left" v-on:click="previousSlide">
        <i class="fas fa-arrow-left fa-3x"/>
      </div>
      <img :src="currentSlide.coverImageURL">
      <div class="arrow-right" v-on:click="nextSlide">
        <i class="fas fa-arrow-right fa-3x"/>
      </div>
    </div>
    <div class="featured-description">
      <div class="subtext">
        {{ currentSlide.title }}
      </div>
      <div class="subtext">
        {{ currentSlide.subTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureSlider',
  props: {
    slides: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      slideIndex: 0,
      currentSlide: {}
    }
  },
  methods: {
    nextSlide () {
      if (this.slideIndex < this.slides.length - 1) {
        this.slideIndex += 1
        this.currentSlide = this.slides[this.slideIndex]
      }
    },
    previousSlide () {
      if (this.slideIndex > 0) {
        this.slideIndex -= 1
        this.currentSlide = this.slides[this.slideIndex]
      }
    }
  },
  created () {
    this.currentSlide = this.slides[0]
  }
}
</script>

<style>
.subtext {
  margin: 2px 10px 0px;
}

.featured-description {
  color: #FFFFFF;
}

.arrow-right {
  z-index: 999;
  margin: 0px 0px 0px -45px;
}

.arrow-left {
  margin: 0px -45px 0px 0px;
}

.arrow-left,
.arrow-right {
  color: #FFFFFF;
  opacity: 0.6;
  z-index: 999;
  cursor: pointer;
}

.arrow-left:hover,
.arrow-right:hover {
  opacity: 0.4;
}

.featured-image-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 300px;
  width: 450px;
  overflow: hidden;
  justify-content: space-between;
}

.custom-carousel {
  display: flex;
  flex-direction: column;
  width: 450px;
}

.featured-description {
  min-height: 60px;
  background-color: #013269;
}
</style>