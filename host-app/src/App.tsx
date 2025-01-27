import { useEffect, useState } from "react";
import { List } from "todo_components/List";
import { Input } from "todo_components/Input";
import { todosApi } from "./modules/todos/api";
import { useAppDispath } from "./shared/redux";
import { addTodo } from "./modules/todos/model/add-todo";
import { TodosType } from "./types";

function App() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispath();


  const { data: todos } = todosApi.useGetTodosQuery();

  const handleAddTodo = async (requestBody: TodosType) => {

    await dispatch(addTodo(requestBody));
  };


  useEffect(() => {
    console.log(todos)
  }, [todos])

  // const [todos, setTodos] = useState([]);

  // const onSubmit = () => {
  //   //TODO fix 
  //   // @ts-ignore
  //   setTodos((prev) => [...prev, newTodo]);
  //   setNewTodo("");
  // };


  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={handleAddTodo} />
      {todos && <List items={todos} />}

      {/* <Input />
      <List /> */}
    </>
  );
}

export default App;