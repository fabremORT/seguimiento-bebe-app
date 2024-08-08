import { LineChart, PieChart } from "@mantine/charts";
import { Badge, Card, Grid } from "@mantine/core";
import randomColor from "randomcolor";
import { useSelector } from "react-redux";

const AnalisisContainer = () => {
	const eventos = useSelector((state) => state.events.events);
	const categorias = useSelector((state) => state.masters.categories);


	const CantidadesCategoria = categorias.map(categoria => {
		return {
			name: categoria.tipo,
			value: eventos.filter(ev => ev.idCategoria === categoria.id).length,
			color: randomColor({hue:'purple', seed:categoria.id})
		}
	})

	const diasComidas = () =>{
		const hoy = new Date();
		const result = []
		for (let i = 6; i >= 0; i--){
			const dia = new Date();
			dia.setDate(hoy.getDate()-i)

			result.push({
				cantidad: eventos.filter(ev => {
					const fecha = new Date(Date.parse(ev.fecha))
					return ev.idCategoria === 31 && fecha.getFullYear() === dia.getFullYear() && fecha.getMonth() === dia.getMonth() && fecha.getDate() === dia.getDate()
				}).length,
				date: dia.toDateString()
			})
		}
		console.log(result)
		return result
	}
	
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
							data={CantidadesCategoria.filter(d => d.value != 0)}
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
							data={diasComidas()}
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
