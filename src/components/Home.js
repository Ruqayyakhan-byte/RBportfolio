import React, { useEffect } from 'react';
import image from '../assets/cartoon.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.data.value);
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
    <div
      className='container-fluid'
      style={{ backgroundColor: '#1d5463', padding: '20px', minHeight: '100vh', paddingLeft: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div style={{ flex: 1 }}>
        <h6>Hello, Welcome</h6>
        <h1>I am Ruqayya Bibi</h1>
        <p>
          {home?.description}
        </p>
        <p>
          {home?.skills}
        </p>
      </div>

      <div style={{ flex: '0 0 auto', marginLeft: '20px', marginTop: '-200px' }}>
        <img
          src={image}
          alt="Ruqayya Bibi Cartoon"
          style={{ width: '150px', height: '150px', borderRadius: '60%' }}
        />
      </div>
    </div>
  );
}

export default Home;