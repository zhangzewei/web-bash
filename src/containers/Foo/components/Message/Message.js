import style from './style.css';
import { Button, Input } from 'antd';
import React, { Component, PropTypes } from 'react';


class Message extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  };

  static contextTypes = {
    fooActions: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      message: this.props.message,
      result: this.props.result,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleClick() {
    this.context.fooActions.handleCommand(this.state.message);
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div className={style.message}>
        <div>
          <Input
            className={style.label}
            value={message}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <Button onClick={this.handleClick} >Type Command Here</Button>
        </div>
        <div className={style.result}>
          <div>{message}</div>
          <h2>The results:</h2>
          <pre>{this.props.result}</pre>
        </div>
      </div>
    );
  }
}

export default Message;
