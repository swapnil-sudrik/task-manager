import axios from "axios";
import base_url from "../api/Node_Base_URL";
import { useState } from "react";

const useSendEmail =()=> {
    const [loading, setLoading] = useState(false);

  const sendOTP = async ( dataToSend, onSuccess, onError) => {
    try {
      setLoading(true);
      const response = await axios.post(`${base_url}/send-otp` , dataToSend);

      onSuccess(response.data);
      console.log(response.data);
    } catch (error) {
      onError();
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendOTP };

} 


export default useSendEmail;