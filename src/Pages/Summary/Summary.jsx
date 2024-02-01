import { useParams } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData/useLoadData";
import { useState, useEffect } from "react";

const Summary = () => {
  const { id } = useParams();
  const shows = useLoadData();
  const [showDetails, setShowDetails] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    movieName: "",
    // Add other relevant details for the form
  });

  useEffect(() => {
    const selectedShow = shows.find((show) => show.show.id.toString() === id);
    setShowDetails(selectedShow ? selectedShow.show : null);
  }, [id, shows]);

  const handleBookTicket = () => {
    setIsBooking(true);
    setBookingInfo({
      movieName: showDetails.name,
      // Set other relevant details for the form
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and storing in local storage
    const bookedTickets = JSON.parse(localStorage.getItem("bookedTickets")) || [];
    bookedTickets.push(bookingInfo);
    localStorage.setItem("bookedTickets", JSON.stringify(bookedTickets));
    setIsBooking(false);
  };

  return (
    <div className=" container mx-auto mt-5 flex justify-between items-center">
      <div>
        {showDetails && (
          <img
            src={showDetails.image.original}
            alt={showDetails.name}
            className="rounded-lg w-full"
          />
        )}
      </div>
      <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-4">Show Summary</h2>
        {showDetails ? (
          <div>
            <p className="text-lg mb-2">Name: {showDetails.name}</p>
            <p className="text-lg mb-2">Language: {showDetails.language}</p>
            <p className="text-lg mb-2">Genres: {showDetails.genres.join(", ")}</p>
            <p className="text-lg mb-2">URL: <a href={showDetails.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{showDetails.url}</a></p>
            <p className="text-lg mb-4">Runtime: {showDetails.runtime} minutes</p>
            <button
              onClick={handleBookTicket}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Book Movie Ticket
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {isBooking && (
          <form onSubmit={handleFormSubmit} className="mt-4">
            <h3 className="text-2xl font-semibold mb-4">Book Movie Ticket</h3>
            <label className="block mb-2">
              Movie Name:
              <input
                type="text"
                value={bookingInfo.movieName}
                readOnly
                className="block w-full border rounded p-2"
              />
            </label>
            {/* Add other relevant form fields */}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Summary;
