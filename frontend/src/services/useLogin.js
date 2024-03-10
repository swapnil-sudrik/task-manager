import axios from "axios"
import base_url from "../api/Node_Base_URL"


const useLogin =() => {
    const login = async (data, onSuccess, onError) => {
        try {
            const response = await axios.post(`${base_url}/login`, data);
                    onSuccess(response.data);
        } catch (error) {
         
            onError();
            throw error;
        }

    };
    return { login };

}

export default useLogin;