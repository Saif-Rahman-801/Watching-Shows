import Card from "../../Components/Card/Card";
import useLoadData from "../../hooks/useLoadData/useLoadData";

const AllShows = () => {
  const shows = useLoadData();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {shows.map((data) => (
        <Card key={data.show.id} data={data} />
      ))}
    </div>
  );
};

export default AllShows;
