import axios from "axios";
// import { BASE_URL } from "../utils/constants";


export const onSignIn = async (dts) => {
    const {data} = await axios.post(`http://localhost:2022/login`, dts);
    return data;
}

export const onSignUp = async (dts) => {
    const {data} = await axios.post(`http://localhost:2022/register`, dts);
    return data;
}