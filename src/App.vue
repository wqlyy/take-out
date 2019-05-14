<template>
  <div id="app">
   <v-header :seller="seller"/>
   <div class="tab-wrapper">
     <tab :tabs="tabs" />
   </div>
  </div>
</template>

<script>
import VHeader from './components/v-header'
import Tab from './components/tab'
import Goods from './components/goods'
import Ratings from './components/ratings'
import Seller from './components/seller'
import { getSeller } from './api'
import qs from 'query-string'
export default {
  name: 'app',
  components: {
    VHeader,
    Tab
  },
  data() {
    return {
      seller:{
        id:qs.parse(location.search).id
      }
    }
  },
  watch: {
    seller(){
console.log(location.search)
    }
    
  },
  computed: {
    tabs() {
      return [{
          label:"商品",
          component:Goods,
          data:{
            seller:this.seller
          }
        },{
          label:"评价",
          component:Ratings,
          data:{
            seller:this.seller
          }
        },{
          label:"商家",
          component:Seller,
          data:{
            seller:this.seller
          }
        }]
    }
  },
  mounted() {
    this._getHeader()
  },
  methods: {
     _getHeader() {
        getSeller({
          id:this.seller.id
        }).then(res => {
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
