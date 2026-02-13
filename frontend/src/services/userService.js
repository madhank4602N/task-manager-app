import axios from 'axios';

const API_URI = "http://localhost:5000/users";

export const fetchUsers = async () =>{
    const res = await axios.get(API_URI);
    return res.data;
};