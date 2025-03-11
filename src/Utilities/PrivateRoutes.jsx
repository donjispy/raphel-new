import { useAuth } from "../Utilities/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ adminOnly }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Checking authentication...
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    // Admin-only protection
    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
