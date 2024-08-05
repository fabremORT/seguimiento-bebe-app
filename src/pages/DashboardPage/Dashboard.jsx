import { AppShell, Group, LoadingOverlay, Text } from "@mantine/core";
import EventosContainer from "../../components/EventosContainer";
import InformeEventosContainer from "../../components/InformeEventosContainer";
import AnalisisContainer from "../../components/AnalisisContainer";
import RegistrarEventoContainer from "../../components/RegistrarEventoContainer/RegistrarEventoContainer";
import { useGetEventosByUserIdQuery } from "../../app/services/babyTrackerAPI";
import { useAuth } from "../../hooks/authHook";
import { useDispatch } from "react-redux";
import { setEvents } from "../../features/events/eventSlice";

export function Dashboard() {
	const user = useAuth();
	const dispatch = useDispatch();

	const { data = [], isLoading } = useGetEventosByUserIdQuery(user.userId);

	dispatch(setEvents(data));

	return (
		<AppShell header={{ height: 60 }} padding="md" mah={"100%"}>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Text>Baby Tracker</Text>
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
				<InformeEventosContainer />
				<AnalisisContainer />
			</AppShell.Main>
		</AppShell>
	);
}

export default Dashboard;
