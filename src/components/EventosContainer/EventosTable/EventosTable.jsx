import { Alert, Space, Table, Title } from "@mantine/core";
import EventoRow from "./EventoRow";
import { IconInfoCircle } from "@tabler/icons-react";

const EventosTable = ({ eventos, title }) => {
	return (
		<div>
			<Title size={'h3'} style={{padding: '5px'}}>{title}</Title>
			{!eventos.length ? (
				<Alert
					variant="light"
					color="yellow"
					title="No hay eventos registrados"
					icon={<IconInfoCircle />}
				></Alert>
			) : (
				<Table.ScrollContainer h={"300"}>
					<Table stickyHeader stickyHeaderOffset={-1} withTableBorder>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Categoria</Table.Th>
								<Table.Th>Detalle</Table.Th>
								<Table.Th>Fecha</Table.Th>
								<Table.Th></Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							{eventos.map((evento) => {
								return <EventoRow key={evento.id} evento={evento}></EventoRow>;
							})}
						</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
			)}
		</div>
	);
};

export default EventosTable;
