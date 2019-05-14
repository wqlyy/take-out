import Axios from 'axios'

const service = Axios.create({
  baseURL: 'take/api'
})
const ERR_OK = 0;
service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use((response) => {
  return response
})

export default service
