import { useParams } from "react-router-dom";

const Summary = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>
                Parms: {id}
            </h2>
        </div>
    );
};

export default Summary;