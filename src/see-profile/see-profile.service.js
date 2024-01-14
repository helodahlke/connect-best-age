import axios from "../axios";

const getUser = async () => {

    try {
        const user = await axios.get('/user');
        return user;
    } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        return false;
    }   
};

export default getUser;