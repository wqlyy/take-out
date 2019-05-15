import Request from '../utils/Request.js'

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    Request.get(url, {
      params: params
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url, data = {}) {
   return new Promise((resolve, reject) => {
    Request.post(url, data)
          .then(response => {
            resolve(response.data)
          }, err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    Request.patch(url, data)
         .then(response => {
           resolve(response.data)
         }, err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    Request.put(url, data)
         .then(response => {
           resolve(response.data)
         }, err => {
           reject(err)
         })
  })
}
