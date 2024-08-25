import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../assets/cartoon.jpeg';

export default function Home() {
  return (
    <div 
      className='container-fluid' 
      style={{ backgroundColor: '#1d5463', padding: '20px', minHeight: '100vh',paddingLeft:'80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div style={{ flex: 1 }}>
        <h6>Hello, Welcome</h6>
        <h1>I am Ruqayya Bibi</h1>
        <p>
          I’m a front-end developer with a strong focus on creating efficient and elegant web applications.
        </p>
        <p>
          I have experience in building projects using React, Bootstrap, and JavaScript.
        </p>
      </div>

      <div style={{ flex: '0 0 auto', marginLeft: '20px',marginTop: '-200px'  }}>
        <img
          src={image}
          alt="Ruqayya Bibi Cartoon"
          style={{ width: '150px', height: '150px', borderRadius: '60%' }}
        />
      </div>
    </div>
  );
}

