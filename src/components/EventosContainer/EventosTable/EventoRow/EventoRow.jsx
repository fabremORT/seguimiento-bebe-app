/* eslint-disable react/prop-types */
import { ActionIcon, Avatar, Table } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import { useDeleteEventoMutation } from "../../../../app/services/babyTrackerAPI"
import { notifications } from "@mantine/notifications"

const EventoRow = ({ evento }) => {
  const [removeEvento] = useDeleteEventoMutation()
  const _handleRemove = async() => {
    try{
			const {data, error } = await removeEvento(evento.id)
      console.log(evento.id)
			if(data) {
				notifications.show({
					title: data.mensaje,
					color: "green"
				})
			}else {
        console.log(error)
				notifications.show({
					title: error.data.mensaje,
					color: "red"
				})
			}
		}catch (err){
			console.log(err)
		}
  }
  return (
    <Table.Tr>
      <Table.Td>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar src={`https://babytracker.develotion.com/imgs/${evento.categoria.imagen}.png`} />
          {evento.categoria.tipo}
        </div>
      </Table.Td>
      <Table.Td>{evento.detalle}</Table.Td>
      <Table.Td>{evento.fecha}</Table.Td>
      <Table.Td>
        <ActionIcon variant="filled" color="red" onClick={_handleRemove}>
          <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  )
}

export default EventoRow