import axios from "axios";

const getPeople =() => {
    return axios.get("https://swapi.dev/api/people/");
}



const exportedObject = {
    getPeople,
    
};

export default exportedObject