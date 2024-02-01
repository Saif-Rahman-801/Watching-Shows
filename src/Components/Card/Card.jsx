import PropTypes from "prop-types"

function Card({ data }) {
  const { show } = data;
  const { image, name, genres, language } = show;

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg my-4">
      <img className="w-full h-48 object-cover object-center" src={image?.original} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mb-2">Genres: {genres.join(', ')}</p>
        <p className="text-gray-600 mb-4">Language: {language}</p>
        <button className="bg-primary text-black font-medium py-2 px-4 rounded-md hover:bg-primary-dark">Learn More</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    show: PropTypes.any
  })
}



export default Card;
