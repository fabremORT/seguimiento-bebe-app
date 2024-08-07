import { LineChart, PieChart } from "@mantine/charts";
import { Badge, Card, Grid } from "@mantine/core";
import { useSelector } from "react-redux";

const AnalisisContainer = () => {
	const categorias = useSelector((state) => state.masters.categories);

	const eventos = [
		{
			name: "categoria1",
			value: 2,
			color: "indigo.6",
		},
		{
			name: "categoria2",
			value: 7,
			color: "yellow.6",
		},
		{
			name: "categoria3",
			value: 4,
			color: "gray.6",
		},
	];

	const comidas = [
		{
			cantidad: 3,
			date: "30-7-2024",
		},
		{
			cantidad: 2,
			date: "31-7-2024",
		},
		{
			cantidad: 3,
			date: "1-8-2024",
		},
		{
			cantidad: 3,
			date: "2-8-2024",
		},
		{
			cantidad: 4,
			date: "3-8-2024",
		},
		{
			cantidad: 3,
			date: "4-8-2024",
		},
		{
			cantidad: 4,
			date: "5-8-2024",
		},
	];
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
					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<h3>Cantidades por categoria</h3>
						<PieChart
							data={eventos}
							withTooltip
							tooltipDataSource="segment"
							mx="auto"
							withLabelsLine
							labelsPosition="inside"
							labelsType="value"
							withLabels
						/>
					</div>
				</Grid.Col>
				<Grid.Col span={4}>
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
							data={comidas}
							dataKey="date"
							series={[{ name: "cantidad", color: "blue.6" }]}
							curveType="linear"
						/>
					</div>
				</Grid.Col>
				<Grid.Col span={4}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<h3>Tiempo para el próximo biberón</h3>
						<Badge color="teal" radius="md" size="100px">
							3:59
						</Badge>
					</div>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default AnalisisContainer;
