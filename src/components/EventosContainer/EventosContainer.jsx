import { Card, Grid } from "@mantine/core";
import EventosTable from "./EventosTable";
import { useSelector } from "react-redux";

const EventosContainer = () => {
	const eventos = useSelector((state) => state.events.events);
	const categorias = useSelector((state) => state.masters.categories);

	const eventosConCategoria = eventos.map((evento) => {
		const categoria = categorias.find((cat) => cat.id === evento.idCategoria);

		if (categoria) {
			return {
				id: evento.id,
				categoria,
				detalle: evento.detalle,
				fecha: evento.fecha,
			};
		}
	});

	const eventosHoy = eventosConCategoria.filter((evento) => {
		const hoy = new Date();
		const fecha = new Date(Date.parse(evento.fecha));
		return (
			fecha.getFullYear() === hoy.getFullYear() &&
			fecha.getMonth() === hoy.getMonth() &&
			fecha.getDate() === hoy.getDate()
		);
	});

	const eventosAnteriores = eventosConCategoria.filter((evento) => {
		const hoy = new Date();
		const fecha = new Date(Date.parse(evento.fecha));
		hoy.setHours(0, 0, 0, 0);
		return fecha < hoy;
	});

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
						eventos={eventosHoy}
						title={"Eventos de hoy"}
					></EventosTable>
				</Grid.Col>
				<Grid.Col span={6}>
					<EventosTable
						eventos={eventosAnteriores}
						title={"Eventos de dias anteriores"}
					></EventosTable>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default EventosContainer;
