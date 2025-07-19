import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PropTypes from 'prop-types'; // For prop type checking

/**
 * ProtectedRoute component that checks for authenticated user before rendering children
 * @param {object} props - Component props
 * @param {ReactNode} props.children - Child components to render if authenticated
 * @param {array} [props.allowedRoles] - Optional array of allowed user roles
 * @param {boolean} [props.redirectUnauthorized=false] - Whether to redirect unauthorized users
 * @returns {ReactNode} Either children or redirect component
 */
function ProtectedRoute({ children, allowedRoles, redirectUnauthorized = false }) {
  const { currentUser, userRole } = useAuth();
  const location = useLocation();

  // If no current user, redirect to login with return location
  if (!currentUser) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  // Check if route has role restrictions
  if (allowedRoles && allowedRoles.length > 0) {
    const hasRequiredRole = allowedRoles.includes(userRole);
    
    if (!hasRequiredRole) {
      return redirectUnauthorized 
        ? <Navigate to="/Login" state={{ from: location }} replace />
        : null; // Or render an "Unauthorized" message component
    }
  }

  // If all checks pass, render children
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  redirectUnauthorized: PropTypes.bool
};

export default ProtectedRoute;