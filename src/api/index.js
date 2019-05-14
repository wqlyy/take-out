import {fetch} from './ajax.js'

export const getSeller = (params) => fetch('seller',params)
export const getGoods = (params) => fetch('goods',params)
export const getRatings = (params) => fetch('ratings',params)
