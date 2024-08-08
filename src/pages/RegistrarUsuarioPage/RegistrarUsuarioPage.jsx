import {
	Button,
	Card,
	Group,
	LoadingOverlay,
	Select,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import {
	useGetCiudadesByDeptoQuery,
	useGetDepartamentosQuery,
	useRegisterUserMutation,
} from "../../app/services/babyTrackerAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { setCredentials } from "../../features/auth/authSlice";

const LoginCardStyles = {
	width: "30%",
};

const FormStyles = {
	height: "100%",
};

const RegistrarUsuarioPage = () => {
	const [selectedDepto, setSelectedDepto] = useState({ value: 0, label: "" });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { data: deptos = [], isLoading: isLoadingDeptos } =
		useGetDepartamentosQuery();
	const { data: ciudades = [], isLoading: isLoadingCiudades } =
		useGetCiudadesByDeptoQuery(Number(selectedDepto.value));
	const [registerUser, { isLoading: isLoadingRegisterUser }] =
		useRegisterUserMutation();

	const form = useForm({
		initialValues: {
			usuario: "",
			password: "",
			confirmPassword: "",
			idDepartamento: "",
			idCiudad: "",
		},

		validate: {
			usuario: (value) => (value ? null : "Debe ingresar un usuario"),
			password: (value) => (value ? null : "Debe ingresar una contraseña"),
			confirmPassword: (value) => {
				if (!value) {
					return "Repita su contraseña";
				} else if (value != form.values.password) {
					return "Las contraseñas no coinciden";
				}
			},
			idDepartamento: (value) =>
				value ? null : "Debe ingresar un departamento",
			idCiudad: (value) => (value ? null : "Debe ingresar una ciudad"),
		},
	});

	const _handleDeptoChange = (value, option) => {
		setSelectedDepto(option);
		form.setFieldValue("idDepartamento", value);
		form.setFieldValue("idCiudad", null);
	};

	const _handleUserSubmit = async (values) => {
		try {
			const { data, error } = await registerUser(values);

			if (data) {
				const { id, apiKey } = data;
				dispatch(setCredentials({ id, apiKey }));
				navigate("/");
				notifications.show({
					title: "Usuario registrado con exito!",
					color: "green",
				});
			} else {
				notifications.show({
					title: error.data.mensaje,
					color: "red",
				});
			}
		} catch (err) {
			console.error(err);
		}
	};

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
				<LoadingOverlay
					visible={isLoadingDeptos || isLoadingCiudades}
					zIndex={1000}
					overlayProps={{ radius: "sm", blur: 2 }}
				/>
				<Group justify="center">
					<Title order={2} style={{ textAlign: "center" }}>
						Registro de Usuario
					</Title>
				</Group>
				<form onSubmit={form.onSubmit(_handleUserSubmit)} style={FormStyles}>
					<TextInput
						withAsterisk
						label="Usuario"
						key={form.key("usuario")}
						{...form.getInputProps("usuario")}
					/>

					<TextInput
						type="password"
						withAsterisk
						label="Contraseña"
						key={form.key("password")}
						{...form.getInputProps("password")}
					/>

					<TextInput
						type="password"
						withAsterisk
						label="Confirmar Contraseña"
						key={form.key("confirmPassword")}
						{...form.getInputProps("confirmPassword")}
					/>

					<Select
						withAsterisk
						label="Departamento"
						placeholder="Elija un departamento"
						key={form.key("idDepartamento")}
						{...form.getInputProps("idDepartamento")}
						data={deptos.map((depto) => {
							return { value: depto.id.toString(), label: depto.nombre };
						})}
						value={selectedDepto.value}
						onChange={_handleDeptoChange}
					/>

					<Select
						withAsterisk
						label="Ciudad"
						placeholder="Elija una ciudad"
						key={form.key("idCiudad")}
						{...form.getInputProps("idCiudad")}
						data={ciudades.map((ciudad) => {
							return { value: ciudad.id.toString(), label: ciudad.nombre };
						})}
					/>

					<Group justify="center" mt="md">
						<Button type="submit" loading={isLoadingRegisterUser}>
							Registrar
						</Button>
					</Group>
				</form>
			</Card>
		</div>
	);
};

export default RegistrarUsuarioPage;
