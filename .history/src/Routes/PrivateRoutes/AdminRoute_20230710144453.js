import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;