import { Card, Grid } from "@mantine/core";
import EventosTable from "./EventosTable";
import { useSelector } from "react-redux";

const EventosContainer = () => {
	const eventos = useSelector((state) => state.events.events);

	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			style={{
				height: 400,
			}}
		>
			<Grid>
				<Grid.Col span={6}>
					<EventosTable
						eventos={eventos}
						title={"Eventos de hoy"}
					></EventosTable>
				</Grid.Col>
				<Grid.Col span={6}>
					<EventosTable
						eventos={eventos}
						title={"Eventos de dias posteriores"}
					></EventosTable>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default EventosContainer;
