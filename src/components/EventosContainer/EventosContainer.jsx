import { Card, Grid } from "@mantine/core";
import EventosTable from "./EventosTable"



const EventosContainer = () => {
	const eventos = [
		{
			"id": 77,
			"idCategoria": 0,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 4",
			"fecha": "2024-06-17 09:00:00"
		},
		{
			"id": 78,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 5",
			"fecha": "2024-06-17 09:00:00"
		},
		{
			"id": 79,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 5",
			"fecha": "2024-07-19 19:31:45"
		},
		{
			"id": 80,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 6",
			"fecha": "2024-07-19 19:40:44"
		},
		{
			"id": 82,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 7",
			"fecha": "2024-07-19 20:06:11"
		},
		{
			"id": 85,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 10",
			"fecha": "2024-07-19 22:18:47"
		},
		{
			"id": 269,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-22 18:37:33"
		},
		{
			"id": 315,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-23 16:00:12"
		},
		{
			"id": 351,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-23 20:03:08"
		},
		{
			"id": 356,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-23 20:15:13"
		},
		{
			"id": 357,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-23 20:15:33"
		},
		{
			"id": 451,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 12:34:35"
		},
		{
			"id": 453,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 17:52:49"
		},
		{
			"id": 454,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 17:55:04"
		},
		{
			"id": 455,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 17:55:46"
		},
		{
			"id": 456,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 20:56:36"
		},
		{
			"id": 457,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 20:57:44"
		},
		{
			"id": 458,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 18:00:46"
		},
		{
			"id": 494,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-25 21:49:19"
		},
		{
			"id": 536,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-26 17:30:19"
		},
		{
			"id": 537,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-26 18:14:05"
		},
		{
			"id": 539,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 540,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 541,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 542,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 543,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 544,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 545,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 547,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 548,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-26 19:57:08"
		},
		{
			"id": 573,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-27 13:56:26"
		},
		{
			"id": 574,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-27 13:57:04"
		},
		{
			"id": 584,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-27 19:39:58"
		},
		{
			"id": 590,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-28 18:06:49"
		},
		{
			"id": 591,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-28 18:08:35"
		},
		{
			"id": 592,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-28 18:08:35"
		},
		{
			"id": 603,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 12:38:48"
		},
		{
			"id": 604,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 12:40:40"
		},
		{
			"id": 605,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 12:40:44"
		},
		{
			"id": 606,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 12:54:11"
		},
		{
			"id": 607,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio TEST",
			"fecha": "2024-07-29 12:54:31"
		},
		{
			"id": 616,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 15:16:35"
		},
		{
			"id": 617,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-29 15:19:16"
		},
		{
			"id": 705,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-30 13:58:03"
		},
		{
			"id": 706,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "0000-00-00 00:00:00"
		},
		{
			"id": 707,
			"idCategoria": 34,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2018-12-12 00:00:00"
		},
		{
			"id": 741,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-30 19:08:50"
		},
		{
			"id": 749,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-30 19:43:38"
		},
		{
			"id": 780,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-30 23:02:06"
		},
		{
			"id": 781,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-30 23:04:15"
		},
		{
			"id": 937,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle del evento",
			"fecha": "2024-07-31 17:09:24"
		},
		{
			"id": 938,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle del evento",
			"fecha": "2024-07-31 17:12:13"
		},
		{
			"id": 939,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle del evento",
			"fecha": "2024-07-31 17:12:15"
		},
		{
			"id": 940,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle del evento",
			"fecha": "2024-07-31 17:12:16"
		},
		{
			"id": 942,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle del evento",
			"fecha": "2024-07-31 17:15:25"
		},
		{
			"id": 1051,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-31 20:55:55"
		},
		{
			"id": 1053,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-31 21:08:37"
		},
		{
			"id": 1101,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-07-31 22:22:52"
		},
		{
			"id": 1506,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-01 21:17:58"
		},
		{
			"id": 1612,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-01 22:22:19"
		},
		{
			"id": 1711,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-02 09:02:57"
		},
		{
			"id": 1712,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-02 09:03:02"
		},
		{
			"id": 1713,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-02 09:03:04"
		},
		{
			"id": 1715,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-02 09:05:14"
		},
		{
			"id": 1739,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-02 11:06:47"
		},
		{
			"id": 2021,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-03 02:36:11"
		},
		{
			"id": 2864,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-04 12:31:37"
		},
		{
			"id": 2865,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-04 12:31:49"
		},
		{
			"id": 2928,
			"idCategoria": 32,
			"idUsuario": 49,
			"detalle": "Detalle aclaratorio 9",
			"fecha": "2024-08-04 17:06:38"
		}
	]
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
			<Grid>
				<Grid.Col span={6}>
					<EventosTable eventos={eventos} title={'Eventos de hoy'}></EventosTable>
				</Grid.Col>
				<Grid.Col span={6}>
					<EventosTable eventos={eventos} title={'Eventos de dias posteriores'}></EventosTable>
				</Grid.Col>
			</Grid>

		</Card>
	);
};

export default EventosContainer;
