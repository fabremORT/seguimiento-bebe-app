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
	}).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));



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
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section withBorder inheritPadding className="cardHeader">
				<h2>Lista de eventos</h2>
			</Card.Section>
			<Grid>
				<Grid.Col span={6}>
					<EventosTable
						eventos={eventosHoy}
						title={"Hoy"}
					></EventosTable>
				</Grid.Col>
				<Grid.Col span={6}>
					<EventosTable
						eventos={eventosAnteriores}
						title={"Anteriores"}
					></EventosTable>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default EventosContainer;
