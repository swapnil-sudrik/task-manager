import axios from "axios";
import base_url from "../api/Node_Base_URL";

export const Try={
    send:async (data)=>{
            try{
            const response = await axios.post(`${base_url}/send-otp`, data);
            console.log('in success')
            const otp = response.data.otp;
            return otp;
        }catch (error){
           throw error;
            
        } 
    }

}
export default Try;

