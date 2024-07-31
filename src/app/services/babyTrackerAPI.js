import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const babyTrackerApi = createApi({
	reducerPath: "babyTrackerApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://babytracker.develotion.com/",
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = getState().auth.token;
			if (token) {
				const userId = getState().user.id;
				headers.set("apikey", `${token}`);
				headers.set("iduser", `${userId}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query(body) {
				return {
					url: `login.php`,
					method: "POST",
					body,
				};
			},
		}),
		registerUser: builder.mutation({
			query(body) {
				return {
					url: `usuarios.php`,
					method: "POST",
					body,
				};
			},
		}),
		getDepartamentos: builder.query({
			query: () => "departamentos.php",
		}),
		getCiudadesByDepto: builder.query({
			query: (deptoId) => `departamentos.php?idDepartamento=${deptoId}`,
		}),
		getEventosByUserId: builder.query({
			query: (userId) => `eventos.php?idUsuario=${userId}`,
		}),
		getCategorias: builder.query({
			query: () => `categorias.php`,
		}),
		getPlazas: builder.query({
			query: () => `plazas.php`,
		}),
		addEvento: builder.mutation({
			query(body) {
				return {
					url: `eventos.php`,
					method: "POST",
					body,
				};
			},
		}),
		deleteEvento: builder.mutation({
			query(eventId) {
				return {
					url: `?idEvento=${eventId}`,
					method: "DELETE",
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useLoginMutation,
	useRegisterUserMutation,
	useGetDepartamentosQuery,
	useGetCiudadesByDeptoQuery,
	useGetEventosByUserIdQuery,
	useGetCategoriasQuery,
	useGetPlazasQuery,
	useAddEventoMutation,
	useDeleteEventoMutation,
} = babyTrackerApi;
