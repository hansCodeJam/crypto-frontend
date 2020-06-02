import axios from "axios";

const Axios = axios.create({
   baseURL:'http://localhost:3001',
   timeout: 50000,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
   }
})

export default Axios;