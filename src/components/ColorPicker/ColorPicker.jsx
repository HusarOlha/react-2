import css from '../ColorPicker/ColorPicker.module.css';
import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptions: 0,
  };
  setActiveIndx = index => {
    this.setState({ activeOptions: index });
  };
  makeOptionClassName = index => {
    const optionClasses = [css['ColorPicker__option']];

    if (index === this.state.activeOptions) {
      optionClasses.push(css['ColorPicker__option--active']);
    }
    return optionClasses.join(' ');
  };
  render() {
    const { activeOptions } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptions];
    return (
      <div className={css.ColorPicker}>
        <h2 className={css['ColorPicker__title']}>Color Picker</h2>
        <p>Обрали такий колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                this.setActiveIndx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
