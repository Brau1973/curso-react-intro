import React from "react";
import { TodoResumeCounter } from "./TodoResumeCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import "./App.css";

const defaultTodos = [
  { text: "Terminar curso react", completed: false },
  { text: "Hacer demo mobile gest edu", completed: false },
  { text: "Armar publi react", completed: true },
  { text: "Prueba tecnica randstad", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoResumeCounter completedTodos={10} allTodos={15} />
      <TodoFilter />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { App };
