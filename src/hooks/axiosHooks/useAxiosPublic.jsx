import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api.tvmaze.com/search/shows?q=all",
});

const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;
