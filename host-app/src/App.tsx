import { useEffect, useState } from "react";
import { List } from "todo_components/List";
import { Input } from "todo_components/Input";
import { todosApi } from "./modules/todos/api";
import { useAppDispath } from "./shared/redux";
import { TodoId } from "./types";
import { addTodo } from "./modules/todos/model/add-todo";

function App() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispath();


  const { data: todos } = todosApi.useGetTodosQuery();

  const handleAddTodo = async (todoId: TodoId) => {
    if (!todoId) {
      return;
    }
    await dispatch(addTodo(todoId));
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