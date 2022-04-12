import clientAPI from "./AxiosConfig";

const baseURL = "https://us-central1-nextfire-b04a6.cloudfunctions.net";
export default {
  getTopTokenHolders(contractAddress: string) {
    return clientAPI(baseURL).get(
      `/getTopTokenHolders?contract_address=${contractAddress}`
    );
  },
};
