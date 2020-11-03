'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: 'blue', fontFamily: 'times' }
  },
  'First React App'
), document.getElementById('react-container'));
