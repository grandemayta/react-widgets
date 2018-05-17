import React from 'react';
import ReactDOM from 'react-dom';

export default class Paragraph extends React.Component {
  render() {
    return (
      <h2>Questo è un template h2</h2>
    );
  }
}

module.exports = {
  render: (selector) => {
    ReactDOM.render(
      <Paragraph />, document.querySelector(selector)
    );
  }
};
