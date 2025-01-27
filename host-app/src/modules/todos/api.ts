import { baseApi } from "../../shared";
import { TodosType } from "../../types";

export const todosApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getTodos: create.query<TodosType[], void>({
            query: () => "/todos",
            providesTags: ["Todos", { type: "Todos", id: "LIST" }],
            transformResponse: (res: TodosType[]) => res,
        }),
        addTodo: create.mutation<TodosType, TodosType>({
            query: (requestBody) => ({ method: "POST", url: `/todos`, body: requestBody }),
        })
    }),
    overrideExisting: true,
})