import clientAPI from "./AxiosConfig";

const baseURL = "https://api.coingecko.com/api/v3";
export default {
  getSimplePrice(tokenId: string, currency: string) {
    return clientAPI(baseURL).get(
      "/simple/price" + "?ids=" + tokenId + "&vs_currencies=" + currency
    );
  },
  getCoinData(tokenId: string) {
    return clientAPI(baseURL).get("/coins/" + tokenId);
  },
};
