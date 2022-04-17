import axios from 'axios'

const clientAPI = (url: string, withCredentials = false) =>
  axios.create({
    baseURL: url,
    withCredentials,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

export default clientAPI
