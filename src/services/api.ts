import axios from "axios";
import Constants from "expo-constants";

console.log(Constants.BACKEND_URL);

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.get("").then((res) => alert(JSON.stringify(res.data)));

export default api;
