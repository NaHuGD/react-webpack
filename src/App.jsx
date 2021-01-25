import React from 'react';
import './all.css';

const App = (props) => {
  const { framework } = props;
  console.log(framework);
  return (
    <>
      <h1 className="active">Webpack React test</h1>
      <div className="bgImg" />
      <div>
        {
          framework ? `yes-${framework}` : 'no'
        }
      </div>
    </>
  );
};

export default App;
