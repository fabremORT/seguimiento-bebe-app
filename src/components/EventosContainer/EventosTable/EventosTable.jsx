import { Table } from "@mantine/core"
import EventoRow from "./EventoRow"

const EventosTable = ({eventos, title}) =>{
  return(
    <div>
			<h2>{title}</h2>
			<Table.ScrollContainer h={'300'}>
				<Table withTableBorder>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Categoria</Table.Th>
							<Table.Th>Detalle</Table.Th>
							<Table.Th>Fecha</Table.Th>
							<Table.Th></Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{
							eventos.map((evento) => {
								return (
									<EventoRow key={evento.id} evento={evento}></EventoRow>
								)
							})
						}

					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</div>
  )
}

export default EventosTable