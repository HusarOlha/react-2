import css from '../TodoList/TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css['TodoList__item']}>
          <p className={css['TodoList__text']}>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
