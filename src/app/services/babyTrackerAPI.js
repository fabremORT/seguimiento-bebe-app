import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const babyTrackerApi = createApi({
	reducerPath: "babyTrackerApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://babytracker.develotion.com/",
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = getState().auth.token;
			const userId = getState().auth.userId;
			if (token) {
				headers.set("apikey", `${token}`);
				headers.set("iduser", `${userId}`);
			}
			return headers;
		},
	}),
	tagTypes: ["Event"],
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
			transformResponse: (response, meta, arg) => response.departamentos,
		}),
		getCiudadesByDepto: builder.query({
			query: (deptoId) => `ciudades.php?idDepartamento=${deptoId}`,
			transformResponse: (response, meta, arg) => response.ciudades,
		}),
		getEventosByUserId: builder.query({
			query: (userId) => `eventos.php?idUsuario=${userId}`,
			transformResponse: (response, meta, arg) => response.eventos,
			providesTags: ["Event"],
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
			invalidatesTags: ["Event"],
		}),
		deleteEvento: builder.mutation({
			query(eventId) {
				return {
					url: `?idEvento=${eventId}`,
					method: "DELETE",
				};
			},
			invalidatesTags: ["Event"],
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
