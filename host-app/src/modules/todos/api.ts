import { baseApi } from "../../shared";
import { TodosType, TodoId } from "../../types";

export const todosApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getTodos: create.query<TodosType[], void>({
            query: () => "/todos",
            providesTags: ["Todos", { type: "Todos", id: "LIST" }],
            transformResponse: (res: TodosType[]) => res,
        }),
        addTodo: create.mutation<TodosType, TodoId>({
            query: () => ({ method: "POST", url: `/todos` }),
        })
    }),
    overrideExisting: true,
})