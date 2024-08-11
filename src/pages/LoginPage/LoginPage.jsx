import { Button, Card, Group, Space, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../app/services/babyTrackerAPI";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notifications } from "@mantine/notifications";

const LoginCardStyles = {
	width: "30%",
};

const FormStyles = {
	height: "100%",
};

const LoginPage = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const _handleLogin = async (credentials) => {
		try {
			const { data, error } = await login(credentials);

			if (data) {
				const { id, apiKey } = data;
				dispatch(setCredentials({ id, apiKey }));
				navigate("/");
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

	const form = useForm({
		initialValues: {
			usuario: "",
			password: "",
		},

		validate: {
			usuario: (value) => (value ? null : "Debe ingresar un usuario"),
			password: (value) => (value ? null : "Debe ingresar una contraseña"),
		},
	});

	useEffect(() => {
		setIsFormValid(form.values.user !== "" && form.values.password !== "");
	}, [form.values]);

	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFECD6",
			}}
		>
			<Card
				shadow="sm"
				padding="lg"
				radius="md"
				withBorder
				style={LoginCardStyles}
			>
				<Card.Section withBorder inheritPadding className="cardHeader">
				<h2>Iniciar sesión</h2>
			</Card.Section>
			<Space h={'md'}></Space>
				<form
					onSubmit={form.onSubmit((values) => _handleLogin(values))}
					style={FormStyles}
				>
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

					<Stack justify="center" align="center" mt="md">
						<Button type="submit" disabled={!isFormValid} loading={isLoading}>
							Iniciar
						</Button>
						<Link to="/registerUser" replace={true}>
							Registrarme
						</Link>
					</Stack>
				</form>
			</Card>
		</div>
	);
};

export default LoginPage;
