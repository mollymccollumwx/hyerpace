// API GET request to SWAPI to obtain list of all people 

import axios from "axios";

const getPeople =() => {
    return axios.get("https://swapi.dev/api/people/");
}


const exportedObject = {
    getPeople,
    
};

export default exportedObject