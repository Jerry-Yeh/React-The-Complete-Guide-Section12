import React from 'react';

const DemoOoutput = props => {
  console.log('DEMOOUT RUNNING');

  return (
    <p>{props.show ? 'This is new!' : ''}</p>
  );
};

export default React.memo(DemoOoutput);