import { AppThunk } from "../../../shared";
import { TodoId } from "../../../types";
import { todosApi } from "../api";

export const addTodo = (todoId: TodoId): AppThunk<Promise<void>> => async (dispatch) => {
    await dispatch(todosApi.endpoints.addTodo.initiate(todoId)).unwrap();


    await dispatch(
        todosApi.util.invalidateTags([{ type: "Todos", id: "LIST" }])
    );
}