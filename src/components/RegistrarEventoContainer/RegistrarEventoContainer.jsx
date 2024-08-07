import { Button, Card, Group, Select, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";

const RegistrarEventoContainer = () => {
	const categorias = useSelector((state) => state.masters.categories);

	const form = useForm({
		initialValues: {
			fecha: "",
			detalles: "",
			idCategoria: 0,
		},

		validate: {
			fecha: (value) => (value ? null : "Debe ingresar una fecha"),
			idCategoria: (value) => (value ? null : "Debe ingresar una categoria"),
		},
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
			<h2>Registrar evento</h2>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Select
					label="Categoria"
					placeholder="Elija una categoria"
					data={categorias?.map((cat) => {
						return { value: cat.id.toString(), label: cat.tipo };
					})}
				/>
				<DateInput
					valueFormat="YYYY-MM-DD HH:mm:ss"
					label="Fecha"
					placeholder="Elija una fecha"
					maxDate={new Date()}
				/>
				<Textarea label="Detalles" placeholder="Ingrese detalles" />

				<Group justify="center" mt="md">
					<Button type="submit">Registrar</Button>
				</Group>
			</form>
		</Card>
	);
};

export default RegistrarEventoContainer;
