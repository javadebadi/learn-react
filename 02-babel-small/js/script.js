const { render } = ReactDOM

render(
  <h1
    id='title'
    className='header'
    style = {{ backgroundColor:'blue', fontFamily:'times' }}
  >
    First React App
  </h1>,
  document.getElementById('react-container')
);
