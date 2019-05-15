import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail'
import ShopCartList from 'components/shop-cart-list'
import ShopCartSticky from 'components/shop-cart-sticky'
import Food from 'components/food'

createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartSticky)
createAPI(Vue, Food)
