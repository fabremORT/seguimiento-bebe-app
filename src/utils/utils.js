export const formatDateToYYYYMMDDHHMM = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");

	return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const formatDateToDayAndDate = (date) => {
	// Array de nombres de días de la semana en español
	const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

	// Obtener el nombre del día de la semana
	const dayOfWeek = daysOfWeek[date.getDay()];

	// Obtener el día del mes
	const dayOfMonth = date.getDate();

	return `${dayOfWeek} ${dayOfMonth}`;
};
