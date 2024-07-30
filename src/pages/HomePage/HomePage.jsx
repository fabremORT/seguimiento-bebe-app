import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Route, Routes } from "react-router-dom";
import EventosPage from "../EventosPage";
import RegistrarEventoPage from "../RegistrarEventoPage";
import InformeEventosPage from "../InformeEventosPage";
import AnalisisPage from "../AnalisisPage";

export function HomePage() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<NavLink to="/">Eventos</NavLink>
				<NavLink to="/registarEvento">Registrar Evento</NavLink>
				<NavLink to="/informeEventos">Informe de Eventos</NavLink>
				<NavLink to="/analisis">Analisis</NavLink>
			</AppShell.Navbar>
			<AppShell.Main>
				<Routes>
					<Route path="/" element={<EventosPage />} />
					<Route path="/registarEvento" element={<RegistrarEventoPage />} />
					<Route path="/informeEventos" element={<InformeEventosPage />} />
					<Route path="/analisis" element={<AnalisisPage />} />
				</Routes>
			</AppShell.Main>
		</AppShell>
	);
}

export default HomePage;
