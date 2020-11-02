const { createElement } = React
const { render } = ReactDOM

const title = createElement(
  'h1',
  {id: 'title', className: 'header'},
  'First React App'
);

render(
  title,
  document.getElementById('react-container')
);
