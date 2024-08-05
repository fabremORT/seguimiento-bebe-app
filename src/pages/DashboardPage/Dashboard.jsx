import { AppShell, Group, LoadingOverlay, Text, Title } from "@mantine/core";
import EventosContainer from "../../components/EventosContainer";
import InformeEventos from "../../components/InformeEventos";
import AnalisisContainer from "../../components/AnalisisContainer";
import RegistrarEventoContainer from "../../components/RegistrarEventoContainer/RegistrarEventoContainer";
import { useGetEventosByUserIdQuery } from "../../app/services/babyTrackerAPI";
import { useAuth } from "../../hooks/authHook";
import { useDispatch } from "react-redux";
import { setEvents } from "../../features/events/eventSlice";
import { useEffect } from "react";

export function Dashboard() {
	const user = useAuth();
	const dispatch = useDispatch();

	const { data = [], isLoading } = useGetEventosByUserIdQuery(user.userId);

	useEffect(() => {
		dispatch(setEvents(data));
	}, [data, dispatch]);

	return (
		<AppShell header={{ height: 60 }} padding="md" mah={"100%"}>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Title order={1}>Baby Tracker</Title>
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
