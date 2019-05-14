<template>
  <div id="app">
   <v-header :seller="seller"/>
   <div class="tab-wrapper">
     <tab/>
   </div>
  </div>
</template>

<script>
import VHeader from './components/v-header'
import Tab from 'components/tab'
import { getSeller } from './api'

export default {
  name: 'app',
  components: {
    VHeader,
    Tab
  },
  data() {
    return {
      seller:{}
    }
  },
  mounted() {
    this._getHeader()
  },
  methods: {
     _getHeader() {
        getSeller().then(res => {
          this.seller = res.result
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
  }
}
</script>
<style lang="stylus">
#app
  .tab-wrapper
    position:fixed
    top:136px
    left:0
    right:0
    bottom:0
</style>
