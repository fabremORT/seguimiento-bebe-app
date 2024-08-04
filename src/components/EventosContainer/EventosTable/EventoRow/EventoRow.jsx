import { Table } from "@mantine/core"

const EventoRow = ({evento}) =>{

  return (
    <Table.Tr>
      <Table.Td>{evento.idCategoria}</Table.Td>
      <Table.Td>{evento.detalle}</Table.Td>
      <Table.Td>{evento.fecha}</Table.Td>
    </Table.Tr>
  )
}

export default EventoRow