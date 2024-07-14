import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUrl from "../constants/baseUrl";
import API_KEY from "../constants/apiKey";
import axios from "axios";


const getReq = async (AsyncID, query)=>{
    try{
        let val = await AsyncStorage.getItem(String(AsyncID))
        if(val==null){
            //Call API
            const response = await  axios.get(`${baseUrl}query?${query}&apikey=${API_KEY}`);
            // const response =  await axios.get(baseUrl+"query?function=OVERVIEW&symbol=IBM&apikey=demo")
            console.log("Response get ",query, "\n", response.data);
            await AsyncStorage.setItem(String(AsyncID), JSON.stringify(response.data))

            setTimeout(async()=>{
                await AsyncStorage.removeItem(AsyncID)
                console.log("item Removed from async storage");
            },1000*60)
            return response.data
        }
        else{
            //Get Data from AsyncStorage
            console.log("Data from Async", JSON.parse(val));
            return JSON.parse(val)
        }

    }catch(e){
        console.error("Error in ", query, e);
    }
}

export default getReq