import axios from "axios"
import base_url from "../api/Node_Base_URL"


const signUp = ()=> {

   const userSignUp = async (data, onSuccess, onError) => {
        try {
            await axios.post(`${base_url}/signup`, data).then(
                () => {
                    onSuccess();
                },
                () => {
                    onError();
                }
            )
        } catch (error) {
            onError();
            throw error;
        }
    };

    return {userSignUp};


}
export default signUp;