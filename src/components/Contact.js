import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const {contact} = useSelector((state) => state.data.value);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-fluid'
      style={{
        backgroundColor: '#1d5463', minHeight: '100vh', padding: '20px'
      }}
    >
      <h1 style={{ color: 'black' }}>Contact Me</h1>
      
      <Form>
        <Form.Group controlId="formName">
          <Form.Label style={{ color: 'black' }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            style={{ width: '300px' }} 
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            style={{ width: '300px' }} 
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label style={{ color: 'black'}}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            style={{ width: '300px' }} 
          />
        </Form.Group>

        <Button variant="dark" type="submit"
        style={{ marginTop: '15px' }} 
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
