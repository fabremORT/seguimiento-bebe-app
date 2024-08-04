import { PieChart } from "@mantine/charts";
import { Card, Grid } from "@mantine/core";

const AnalisisContainer = () => {
	const eventos = [
		{
			name: "categoria1",
			value: 2,
			color: 'indigo.6'
		},
		{
			name: "categoria2",
			value: 7,
			color: 'yellow.6'
		},
		{
			name: "categoria3",
			value: 4,
			color: 'gray.6'
		},
	]
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			style={{
				height: 400,
			}}>
			<h2>Analisis</h2>
			<Grid>
				<Grid.Col span={4}>
					<div style={{display:'flex', alignItems:'center', flexDirection:"column"}}>
						<h3>Cantidades por categoria</h3>
						<PieChart data={eventos} withTooltip tooltipDataSource="segment" mx="auto" withLabelsLine labelsPosition="inside" labelsType="value" withLabels />
					</div>
				</Grid.Col>
			</Grid>

		</Card>
	);
};

export default AnalisisContainer;
