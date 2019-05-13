import Axios from 'axios'

const service = Axios.create({})

service.interceptors.request.use((config) => {
  console.log(config)
  return config
})

service.interceptors.response.use((response) => {
  console.log(response)
  return response
})

export default service
