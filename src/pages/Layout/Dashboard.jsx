import { AppShell, Burger, Grid, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import EventosContainer from "../../components/EventosContainer";
import InformeEventosContainer from "../../components/InformeEventosContainer";
import AnalisisContainer from "../../components/AnalisisContainer";
import RegistrarEventoContainer from "../../components/RegistrarEventoContainer/RegistrarEventoContainer";

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
				<Grid>
					<Grid.Col span={3}>
						<RegistrarEventoContainer />
					</Grid.Col>
					<Grid.Col span={9}>
						<EventosContainer />
					</Grid.Col>
					<Grid.Col span={12}>
						<AnalisisContainer />
					</Grid.Col>
				</Grid>
				{/* <InformeEventosContainer /> */}

			</AppShell.Main>
		</AppShell>
	);
}

export default Dashboard;
