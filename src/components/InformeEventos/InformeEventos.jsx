import { Card, Stack, Text, Title } from "@mantine/core";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const InformeEventos = () => {
	const eventos = useSelector((state) => state.events.events);

	const todayString = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
	const ingeridosHoy = useMemo(
		() =>
			eventos.filter(
				(evento) =>
					evento.idCategoria === 35 &&
					evento.fecha.split(" ")[0] === todayString
			).length,
		[eventos, todayString]
	);
	const ultimoBiberon = useMemo(() => {
		const biberones = eventos.filter((evento) => evento.idCategoria === 35);
		if (biberones.length === 0) return null;
		return biberones.reduce(
			(latest, current) =>
				new Date(current.fecha) > new Date(latest.fecha) ? current : latest,
			biberones[0]
		).fecha;
	}, [eventos]);
	const cambiadosHoy = useMemo(
		() =>
			eventos.filter(
				(evento) =>
					evento.idCategoria === 33 &&
					evento.fecha.split(" ")[0] === todayString
			).length,
		[eventos, todayString]
	);
	const ultimoCambio = useMemo(() => {
		const cambios = eventos.filter((evento) => evento.idCategoria === 33);
		if (cambios.length === 0) return null;
		return cambios.reduce(
			(latest, current) =>
				new Date(current.fecha) > new Date(latest.fecha) ? current : latest,
			cambios[0]
		).fecha;
	}, [eventos]);

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Title order={2}>Informe de Eventos</Title>
			<Card shadow="sm" padding="lg" radius="md" withBorder>
				<h2>Biberones</h2>
				<Stack>
					<Text fw={500}>Ingeridos en el dia: </Text>
					<Text>{ingeridosHoy}</Text>
					<Text fw={500}>Ultimo biberon: </Text>
					<Text>{ultimoBiberon}</Text>
				</Stack>
			</Card>
			<Card shadow="sm" padding="lg" radius="md" withBorder>
				<h2>Pañales</h2>
				<Stack>
					<Text span fw={500}>
						Cambiados en el dia:{" "}
					</Text>
					<Text>{cambiadosHoy}</Text>
					<Text span fw={500}>
						Ultimo cambio:{" "}
					</Text>
					<Text>{ultimoCambio}</Text>
				</Stack>
			</Card>
		</Card>
	);
};

export default InformeEventos;
