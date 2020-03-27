import axios from 'axios'
import qs from 'qs'
// import { Loading } from "element-ui";
// import {
//   messages
// } from '../assets/js/common.js'
axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const res = response.data
      // messages('error', '123456')
      if (res.code === '200') {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
  error => {
    console.log(error)
    const status = error.response.status
    switch (status) {
      case 500:
        // messages('123')
        break
      case 404:
        // console.log(c)
        break
      case 401:
        // console.log(c)
        break
      case 400:
        // console.log(c)
        break
      default:
        // console.log(error.response.data.message)
    }
    return Promise.reject(error)
  }
)
export default {
  GET (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },
  POST (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then(res => {
        console.log(res.data.code)
        console.log('进入了')
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
