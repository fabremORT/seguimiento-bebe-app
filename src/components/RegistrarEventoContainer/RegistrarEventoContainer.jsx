import { Button, Card, Group, Select, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";
import { useAddEventoMutation } from "../../app/services/babyTrackerAPI";
import { notifications } from "@mantine/notifications";
import { useAuth } from "../../hooks/authHook";
import { formatDateToYYYYMMDDHHMM } from "../../utils/utils";

const RegistrarEventoContainer = () => {
	const categorias = useSelector((state) => state.masters.categories);
	const [addEvento, { isLoading: isLoadingAddEvento }] = useAddEventoMutation();
	const user = useAuth();
	const form = useForm({
		initialValues: {
			fecha: "",
			detalle: "",
			idCategoria: 0,
		},

		validate: {
			fecha: (value) => (value ? null : "Debe ingresar una fecha"),
			idCategoria: (value) => (value ? null : "Debe ingresar una categoria"),
		},
	});

	const _handleSubmit = async (values) => {
		try {
			const dataToSend = { ...values };
			dataToSend.idUsuario = user.userId;
			dataToSend.fecha = formatDateToYYYYMMDDHHMM(values.fecha);
			const { data, error } = await addEvento(dataToSend);

			if (data) {
				notifications.show({
					title: data.mensaje,
					color: "green",
				});
			} else {
				notifications.show({
					title: error.data.mensaje,
					color: "red",
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

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
			<form onSubmit={form.onSubmit(_handleSubmit)}>
				<Select
					label="Categoria"
					placeholder="Elija una categoria"
					key={form.key("idCategoria")}
					{...form.getInputProps("idCategoria")}
					data={categorias?.map((cat) => {
						return { value: cat.id.toString(), label: cat.tipo };
					})}
				/>
				<DateInput
					valueFormat="YYYY-MM-DD HH:mm:ss"
					label="Fecha"
					placeholder="Elija una fecha"
					maxDate={new Date()}
					key={form.key("fecha")}
					{...form.getInputProps("fecha")}
				/>
				<Textarea
					label="Detalle"
					placeholder="Ingrese detalle"
					key={form.key("detalle")}
					{...form.getInputProps("detalle")}
				/>

				<Group justify="center" mt="md">
					<Button type="submit" loading={isLoadingAddEvento}>
						Registrar
					</Button>
				</Group>
			</form>
		</Card>
	);
};

export default RegistrarEventoContainer;
