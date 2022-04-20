import clientAPI from './AxiosConfig'

const baseURL = '/yakkabotapi'
const withCredentials = false
export default {
  getTopTokenHolders(contractAddress: string, limit: number) {
    return clientAPI(baseURL, withCredentials).get(`/token-metrics/topTokenHolders/${contractAddress}/${limit}`)
  },
  getTokensNew() {
    return clientAPI(baseURL, withCredentials).get(`/token-metrics/tokensNew`)
  },
}
