import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import EventosContainer from "../../components/EventosContainer";
import InformeEventosContainer from "../../components/InformeEventosContainer";
import AnalisisContainer from "../../components/AnalisisContainer";

export function Dashboard() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell header={{ height: 60 }} padding="md" mah={"100%"}>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Text>Baby Tracker</Text>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<EventosContainer />
				<InformeEventosContainer />
				<AnalisisContainer />
			</AppShell.Main>
		</AppShell>
	);
}

export default Dashboard;
