import { Button, Card, Group, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const RegistrarUsuarioPage = () => {
	const deptos = [
		{
			id: 3203,
			nombre: "Flores",
		},
		{
			id: 3204,
			nombre: "San José",
		},
		{
			id: 3205,
			nombre: "Artigas",
		},
		{
			id: 3206,
			nombre: "Maldonado",
		},
		{
			id: 3207,
			nombre: "Rivera",
		},
		{
			id: 3208,
			nombre: "Colonia",
		},
		{
			id: 3209,
			nombre: "Durazno",
		},
		{
			id: 3210,
			nombre: "Río Negro",
		},
		{
			id: 3211,
			nombre: "Cerro Largo",
		},
		{
			id: 3212,
			nombre: "Paysandú",
		},
		{
			id: 3213,
			nombre: "Canelones",
		},
		{
			id: 3214,
			nombre: "Treinta y Tres",
		},
		{
			id: 3215,
			nombre: "Lavalleja",
		},
		{
			id: 3216,
			nombre: "Rocha",
		},
		{
			id: 3217,
			nombre: "Florida",
		},
		{
			id: 3218,
			nombre: "Montevideo",
		},
		{
			id: 3219,
			nombre: "Soriano",
		},
		{
			id: 3220,
			nombre: "Salto",
		},
		{
			id: 3221,
			nombre: "Tacuarembó",
		},
	];

	const ciudades = [];

	const LoginCardStyles = {
		width: "30%",
	};

	const FormStyles = {
		height: "100%",
	};

	const form = useForm({
		initialValues: {
			usuario: "",
			password: "",
			confirmPassword: "",
			idDepartamento: 0,
			idCiudad: 0,
		},

		validate: {
			usuario: (value) => (value ? null : "Debe ingresar un usuario"),
			password: (value) => (value ? null : "Debe ingresar una contraseña"),
			confirmPassword: (value) => (value ? null : "Repita su contraseña"),
			idDepartamento: (value) =>
				value ? null : "Debe ingresar un departamento",
			idCiudad: (value) => (value ? null : "Debe ingresar una ciudad"),
		},
	});

	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "aliceblue",
			}}
		>
			<Card
				shadow="sm"
				padding="lg"
				radius="md"
				withBorder
				style={LoginCardStyles}
			>
				<form
					onSubmit={form.onSubmit((values) => console.log(values))}
					style={FormStyles}
				>
					<TextInput
						withAsterisk
						label="Usuario"
						key={form.key("usuario")}
						{...form.getInputProps("usuario")}
					/>

					<TextInput
						withAsterisk
						label="Contraseña"
						key={form.key("password")}
						{...form.getInputProps("password")}
					/>

					<TextInput
						withAsterisk
						label="Confirmar Contraseña"
						key={form.key("confirmPassword")}
						{...form.getInputProps("confirmPassword")}
					/>

					<Select
						withAsterisk
						label="Departamento"
						placeholder="Elija un departamento"
						data={deptos.map((depto) => {
							return { value: depto.id.toString(), label: depto.nombre };
						})}
					/>

					<Select
						withAsterisk
						label="Ciudad"
						placeholder="Elija una ciudad"
						data={deptos.map((depto) => {
							return { value: depto.id.toString(), label: depto.nombre };
						})}
					/>

					<Group justify="center" mt="md">
						<Button type="submit">Registrar</Button>
					</Group>
				</form>
			</Card>
		</div>
	);
};

export default RegistrarUsuarioPage;
