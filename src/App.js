import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  const [state, setState] = React.useState(false);

  // const h2Style = {
  //   backgroundColor: 'blue',
  //   color: state ? 'yellow' : 'green',
  // };

  let headerStyle = 'main-header';
  if (state) {
    headerStyle += ' color-green';
  }
  return (
    <div>
      <Header />
      {/* <h1 style={h2Style}>Hello World</h1> */}
      <h1 className={headerStyle}>Hello World</h1>
      <button onClick={() => setState((prev) => !prev)}>Toggle State</button>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
