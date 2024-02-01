import PropTypes from "prop-types"
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute;