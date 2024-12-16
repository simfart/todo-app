import { Todo } from "./types";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <li className={styles.todoItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => deleteTodo(todo.id)}
      >
        ×
      </button>
    </li>
  );
};
