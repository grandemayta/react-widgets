import React from 'react';
import ReactDOM from 'react-dom';

export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

module.exports = {
  render: (selector, title) => {
    ReactDOM.render(
      <Title title={title} />, document.querySelector(selector)
    );
  }
};
