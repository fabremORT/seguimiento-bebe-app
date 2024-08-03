import { Button, Card, Group, Select, Textarea } from "@mantine/core";
import { DateInput } from '@mantine/dates';
import { useForm } from "@mantine/form";

const RegistrarEventoContainer = () => {
	const categorias = [
		{
			"id": 31,
			"tipo": "Comida",
			"imagen": 1
		},
		{
			"id": 32,
			"tipo": "Paseo",
			"imagen": 2
		},
		{
			"id": 33,
			"tipo": "Pañal",
			"imagen": 3
		},
		{
			"id": 34,
			"tipo": "Sueño",
			"imagen": 4
		},
		{
			"id": 35,
			"tipo": "Biberón",
			"imagen": 5
		},
		{
			"id": 36,
			"tipo": "Juego",
			"imagen": 6
		}
	]

	const form = useForm({
		initialValues: {
			fecha: "",
			detalles: "",
			idCategoria: 0,
		},

		validate: {
			fecha: (value) => (value ? null : "Debe ingresar una fecha"),
			idCategoria: (value) =>
				value ? null : "Debe ingresar una categoria",
		},
	});

	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			style={{
				width:'30%'
			}}
		>
			<h2>Registrar evento</h2>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Select
					label="Categoria"
					placeholder="Elija una categoria"
					data={categorias.map((cat) => {
						return { value: cat.id.toString(), label: cat.tipo };
					})}
				/>
				<DateInput
					valueFormat="YYYY-MM-DD HH:mm:ss"
					label="Fecha"
					placeholder="Elija una fecha"
					maxDate={new Date()}
				/>
				<Textarea
					label="Detalles"
					placeholder="Ingrese detalles"
				/>

				<Group justify="center" mt="md">
					<Button type="submit">Registrar</Button>
				</Group>
			</form>
		</Card>
	);
};

export default RegistrarEventoContainer;
