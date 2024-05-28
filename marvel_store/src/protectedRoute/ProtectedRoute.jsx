// src/components/ProtectedRoute.jsx
import {Navigate} from 'react-router-dom';
import {useAuth} from '../contexts/authContext/AuthContext';
import PropTypes from "prop-types";

const ProtectedRoute = ({children}) => {
    const {currentUser} = useAuth();

    return currentUser ? children : <Navigate to="/login"/>;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
