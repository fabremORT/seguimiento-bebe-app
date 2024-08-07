import {
	ActionIcon,
	AppShell,
	Group,
	LoadingOverlay,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import EventosContainer from "../../components/EventosContainer";
import InformeEventos from "../../components/InformeEventos";
import AnalisisContainer from "../../components/AnalisisContainer";
import RegistrarEventoContainer from "../../components/RegistrarEventoContainer/RegistrarEventoContainer";
import {
	useGetCategoriasQuery,
	useGetEventosByUserIdQuery,
} from "../../app/services/babyTrackerAPI";
import { useAuth } from "../../hooks/authHook";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../features/events/eventSlice";
import { useEffect } from "react";
import { IconLogout2 } from "@tabler/icons-react";
import { logout } from "../../features/auth/authSlice";

export function Dashboard() {
	const user = useAuth();
	const dispatch = useDispatch();

	useGetCategoriasQuery();
	const { data = [], isLoading } = useGetEventosByUserIdQuery(user.userId);

	const _handleLogout = () => dispatch(logout());

	useEffect(() => {
		dispatch(setEvents(data));
	}, [data, dispatch]);

	return (
		<AppShell header={{ height: 60 }} padding="md" mah={"100%"}>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Title order={1}>Baby Tracker</Title>
					<Tooltip label="Cerrar sesion">
						<ActionIcon
							variant="subtle"
							color="gray"
							radius="xs"
							onClick={_handleLogout}
						>
							<IconLogout2 />
						</ActionIcon>
					</Tooltip>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<LoadingOverlay
					visible={isLoading}
					zIndex={1000}
					overlayProps={{ radius: "sm", blur: 2 }}
				/>
				<RegistrarEventoContainer />
				<EventosContainer />
				<InformeEventos />
				<AnalisisContainer />
			</AppShell.Main>
		</AppShell>
	);
}

export default Dashboard;
