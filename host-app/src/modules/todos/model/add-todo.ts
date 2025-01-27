import { AppThunk } from "../../../shared";
import { TodosType } from "../../../types";
import { todosApi } from "../api";

export const addTodo = (requestBody: TodosType): AppThunk<Promise<void>> => async (dispatch) => {



    await dispatch(todosApi.endpoints.addTodo.initiate(requestBody)).unwrap();


    await dispatch(
        todosApi.util.invalidateTags([{ type: "Todos", id: "LIST" }])
    );
}