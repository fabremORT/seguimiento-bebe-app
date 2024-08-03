import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";

export function PrivateOutlet() {
	const user = useAuth();

	return user.userId ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
