import css from '../Counter/Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={css['counter__controls']}>
      <button type="button" onClick={onIncrement}>
        Збільшити на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Зменшити на 1
      </button>
    </div>
  );
};

export default Controls;
