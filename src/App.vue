<template>
  <div id="app">
   <v-header :seller="seller"/>
   <DHeader/>
  </div>
</template>

<script>
import VHeader from './components/v-header'
import DHeader from './components/header-detail'
import { getSeller } from './api'

export default {
  name: 'app',
  components: {
    VHeader,
    DHeader
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

</style>
