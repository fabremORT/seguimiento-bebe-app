import { Button, Card, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";

const LoginPage = () => {
	const [isFormValid, setIsFormValid] = useState(false);

	const LoginCardStyles = {
		width: "30%",
	};

	const FormStyles = {
		height: "100%",
	};

	const form = useForm({
		initialValues: {
			user: "",
			password: "",
		},

		validate: {
			user: (value) => (value ? null : "Debe ingresar un usuario"),
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
						key={form.key("user")}
						{...form.getInputProps("user")}
					/>

					<TextInput
						withAsterisk
						label="Contraseña"
						key={form.key("password")}
						{...form.getInputProps("password")}
					/>

					<Group justify="center" mt="md">
						<Button type="submit" disabled={!isFormValid}>
							Iniciar
						</Button>
					</Group>
				</form>
			</Card>
		</div>
	);
};

export default LoginPage;
