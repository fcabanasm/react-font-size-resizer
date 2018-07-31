import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

class SwitchTextSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      font_size: props.default
    };

    this.toggle = this.toggle.bind(this);
  }

  getTextSize() {
    let font_size;
    if (this.props.store && this.props.store.getItem(this.props.storeKey)) {
      font_size = this.props.store.getItem(this.props.storeKey);
    } else {
      font_size = this.state.font_size;
    }
    return parseInt(font_size, 10);
  }

  toggle(type) {
    let new_font_size = this.getTextSize();
    switch (type) {
      case "increase":
        new_font_size += this.props.step;
        break;
      case "decrease":
        new_font_size -= this.props.step;
        break;
      default:
        new_font_size = this.props.default;
        break;
    }
    this.setState({ font_size: new_font_size });
    this.props.store.setItem(this.props.storeKey, new_font_size);
  }

  componentDidMount() {
    if (this.props.store && this.props.store.getItem(this.props.storeKey)) {
      this.setState({
        font_size: this.props.store.getItem(this.props.storeKey)
      });
    }
  }

  render() {
    const font_size = this.getTextSize();
    return (
      <React.Fragment>
        <button
          disabled={font_size <= this.props.min}
          className={styles.dot_button}
          onClick={event => this.toggle("decrease")}
        >
          -a
        </button>
        <button
          className={styles.dot_button}
          onClick={event => this.toggle("default")}
        >
          a
        </button>
        <button
          disabled={font_size >= this.props.max}
          className={styles.dot_button}
          onClick={event => this.toggle("increase")}
        >
          +a
        </button>

        <style>
          {`html { font-size: ${font_size}${this.props.suffix} }`.trim()}
        </style>
      </React.Fragment>
    );
  }
}

SwitchTextSize.propTypes = {
  default: PropTypes.number,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  suffix: PropTypes.string,
  store: PropTypes.object,
  storeKey: PropTypes.string
};

SwitchTextSize.defaultProps = {
  default: 100,
  step: 20,
  min: 60,
  max: 180,
  suffix: "%",
  store: localStorage,
  storeKey: "SwitchTextSize"
};

export default SwitchTextSize;
