import axios from "axios";

export default class DataServiceClass {
    static async getCities(url) {
        // console.log(url)
        try {
            const responce = await axios.get(url)
            // console.dir(responce)
            return responce.data
        }
        catch (e) {
            console.log(e)
        }
    }
}