import React from 'react';
import css from '../Counter/Counter.module.css';
import Controls from '../Counter/Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = event => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <>
        <div className={css.counter}>
          <span className={css['counter-value']}>{this.state.value}</span>
          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Controls>
        </div>
      </>
    );
  }
}

export default Counter;
