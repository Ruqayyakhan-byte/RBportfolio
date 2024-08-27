import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/Action'; 

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <div className='container-fluid'
      style={{
         backgroundColor: '#1d5463',minHeight: '100vh', padding: '20px'
      }}
    >
      <h1 style={{ color: 'black' }}>Contact Me</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label style={{ color: 'black' }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label style={{ color: 'black' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
