import axios from "axios";

export default {
  getPeople: function () {
    return axios.get("https://swapi.dev/api/people/");
  },
};
