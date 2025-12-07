import { Navigate } from "react-router";
import { useUserContext } from "../contexts/UserContext";

export default function RouteGuard({ children, ownerId, guest = false }) {
    const { user } = useUserContext();
    // guest routes
    if (guest && user) {
        return <Navigate to="/" replace />;
    }
    // protected routes 
    if (!guest && !user) {
        return <Navigate to="/login" replace />;
    }
    // owner or admin check for game edits
    if (ownerId && user) {
        const isAdmin = user.email === "admin@abv.bg";
        if (!isAdmin && user._id !== ownerId) {
            return <Navigate to="/catalog" replace />;
        }
    }
    return children;
}
