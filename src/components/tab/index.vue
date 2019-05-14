<template>
  <div class="tab">
    <cube-tab-bar 
      :showSlider="true"
      :useTransition="false"
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        ref="slide"
        :options="slideOptions"
        @change="onChange"
        @scroll="onScroll"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component" :data="tab.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      index: 0,
      slideOptions:{
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value=>value.label===newVal)
      }
    }
  },
  methods: {
    onChange(current) {
      this.index = current
    },
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const tranform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(tranform)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/common/stylus/variable'
.tab
  >>> .cube-tab
    padding:10px 0
  display:flex
  flex-direction:column
  height:100%
  .slide-wrapper
    flex:1
    overflow:hidden
</style>
