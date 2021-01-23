import axios from "axios";

const getUsers = () => {
  return axios.get("https://randomuser.me/api/?results=5");
};

export default getUsers;
