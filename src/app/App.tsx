import { FC, useState } from "react";
import { Todo } from "../components/todoItem/types";
import { FilterButtons } from "../components/filterButtons";
import { TodoItem } from "../components/todoItem";
import styles from "./App.module.scss";

export const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [newTask, setNewTask] = useState<string>("");

  const addTodo = () => {
    if (newTask.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        {" "}
        <h1 className={styles.title}>todos</h1>
        <div className={styles.newTask}>
          <input
            type="text"
            placeholder="New Task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>

      <ul className={styles.todoList}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <div>
        <span>{todos.filter((todo) => !todo.completed).length} items left</span>
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
        <button className={styles.clearBtn} onClick={clearCompleted}>
          Clear complited
        </button>
      </div>
    </div>
  );
};
