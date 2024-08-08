import { LineChart, PieChart } from "@mantine/charts";
import { Alert, Badge, Card, Grid } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import randomColor from "randomcolor";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const AnalisisContainer = () => {
	const eventos = useSelector((state) => state.events.events);
	const categorias = useSelector((state) => state.masters.categories);

	const CantidadesCategoria = categorias.map((categoria) => {
		return {
			name: categoria.tipo,
			value: eventos.filter((ev) => ev.idCategoria === categoria.id).length,
			color: randomColor({ hue: "purple", seed: categoria.id }),
		};
	});

	const diasComidas = () => {
		const hoy = new Date();
		const result = [];
		for (let i = 6; i >= 0; i--) {
			const dia = new Date();
			dia.setDate(hoy.getDate() - i);

			result.push({
				cantidad: eventos.filter((ev) => {
					const fecha = new Date(Date.parse(ev.fecha));
					return (
						ev.idCategoria === 31 &&
						fecha.getFullYear() === dia.getFullYear() &&
						fecha.getMonth() === dia.getMonth() &&
						fecha.getDate() === dia.getDate()
					);
				}).length,
				date: dia.toDateString(),
			});
		}
		return result;
	};

	const ultimoBiberon = useMemo(() => {
		const biberones = eventos.filter((evento) => evento.idCategoria === 35);
		if (biberones.length === 0) return null;
		return biberones.reduce(
			(latest, current) =>
				new Date(current.fecha) > new Date(latest.fecha) ? current : latest,
			biberones[0]
		).fecha;
	}, [eventos]);

	const tiempoRestante = useMemo(() => {
		// const startDate = new Date(ultimoBiberon.replace(" ", "T"));
		const startDate = new Date(ultimoBiberon).setHours(
			new Date(ultimoBiberon).getHours() + 4
		);
		const endDate = new Date();

		/// Calcular la diferencia en milisegundos
		const diffMs = endDate - startDate;

		// Determinar si la diferencia es negativa
		const isNegative = diffMs < 0;

		// Convertir la diferencia de milisegundos a horas y minutos usando el valor absoluto
		const diffHours = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60));
		const diffMinutes = Math.floor(
			(Math.abs(diffMs) % (1000 * 60 * 60)) / (1000 * 60)
		);

		// Formatear las horas y minutos en HH:mm
		const formattedHours =
			(isNegative ? "-" : "") + String(diffHours).padStart(2, "0");
		const formattedMinutes = String(diffMinutes).padStart(2, "0");

		return `${formattedHours}:${formattedMinutes}`;
	}, [ultimoBiberon]);

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
			<h2>Analisis</h2>
			<Grid>
				<Grid.Col span={4}>
					{!eventos.length ? (
						<Alert
							variant="light"
							color="yellow"
							title="No hay eventos registrados"
							icon={<IconInfoCircle />}
						></Alert>
					) : (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<h3>Cantidades por categoria</h3>
							<PieChart
								data={CantidadesCategoria.filter((d) => d.value != 0)}
								withTooltip
								tooltipDataSource="segment"
								mx="auto"
								withLabelsLine
								labelsPosition="inside"
								labelsType="value"
								withLabels
							/>
						</div>
					)}
				</Grid.Col>
				<Grid.Col span={4}>
					{!eventos.length ? (
						<Alert
							variant="light"
							color="yellow"
							title="No hay eventos registrados"
							icon={<IconInfoCircle />}
						></Alert>
					) : (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<h3>Comidas en los ultimos 7 dias</h3>
							<LineChart
								h={200}
								data={diasComidas()}
								dataKey="date"
								series={[{ name: "cantidad", color: "blue.6" }]}
								curveType="linear"
							/>
						</div>
					)}
				</Grid.Col>
				<Grid.Col span={4}>
					{!ultimoBiberon ? (
						<Alert
							variant="light"
							color="yellow"
							title="No se han ingresado biberones"
							icon={<IconInfoCircle />}
						></Alert>
					) : (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<h3>Tiempo para el próximo biberón</h3>
							<Badge color="teal" radius="md" size="100px">
								{tiempoRestante}
							</Badge>
						</div>
					)}
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default AnalisisContainer;
