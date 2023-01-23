import axios from "axios";

const url = 'https://dummyjson.com/users';
const limit = 3;
let skip = 0;

const fetchUsers = async () => {
    try {
        const response = await axios.get(`${url}?skip=${skip}&limit=${limit}`)
        skip += limit
        return response.data.users
    } catch (e) {
        console.log(e)
        return []
    }
}
export default {
    fetchUsers
}
