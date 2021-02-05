import React from 'react';
import './Features.css';

function Features() {
  return (
    <>
    <section className='banner'>
      <h2>Features</h2>
    </section>
    <section className='features'>
        <div className='feature'>
          <h3>Feature 1</h3>
          <p>
            Authentic helvetica gastropub subway tile bitters.
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='feature'>
          <h3>Feature 2</h3>
          <p> 
          Lorem occaecat elit heirloom.
          </p>
        </div>
        <div className='feature'>
          <h3>Feature 3</h3>
        </div>
    </section>
    </>
  );
}

export default Features;
