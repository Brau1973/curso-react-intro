import { TodoResumeCounter } from "./TodoResumeCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoResumeCounter />
      <TodoFilter />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export { App };
