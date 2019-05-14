import {fetch} from './ajax.js'

export const getSeller = () => fetch('seller')
export const getGoods = () => fetch('goods')
