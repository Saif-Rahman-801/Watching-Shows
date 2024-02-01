import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axiosHooks/useAxiosPublic";
import Card from "../../Components/Card/Card";

const AllShows = () => {
  const [shows, setShows] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosPublic]);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-5">
      {shows.map((data) => (
        <Card key={data.show.id} data={data}/>
      ))}
    </div>
  );
};

export default AllShows;
