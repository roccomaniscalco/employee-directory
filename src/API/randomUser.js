import axios from "axios";

const getUsers = () => {
  return axios.get("https://randomuser.me/api/?results=20&nat=us&noinfo");
};

export default getUsers;
