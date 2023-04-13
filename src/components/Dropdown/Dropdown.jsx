import React, { Component } from 'react';
import css from '../Dropdown/Dropdown.module.css';

class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <div className={css.dropdown}>
        <button
          type="button"
          className={css.dropdown__toogle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Cховати' : 'Показати'}
        </button>

        {this.state.visible && (
          <div className={css.dropdown__menu}>Випадаюче меню</div>
        )}
      </div>
    );
  }
}
export default DropDown;
