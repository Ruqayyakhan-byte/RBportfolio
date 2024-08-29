import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';
const Education = () => {
  const dispatch = useDispatch();
  const { education } = useSelector((state) => state.data.value);
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
    <div className='container-fluid' style={{backgroundColor: '#1d5463', color: 'black', padding: '20px',paddingLeft:'80px' }}>
      <h1>Education</h1>
    <div>
      <section style={{ marginTop: '20px' }}>
        <h3>{ education[0]?.title}</h3>
        <p><strong>Institution:</strong>{education[0]?.institution}</p>
        <p><strong>Dates:</strong> {education[0]?.dates}</p>
        <p><strong>Key Courses:</strong> {education[0]?.keyCourses}</p>
        <p><strong>Achievements:</strong>{education[0]?.achievements}</p>
      </section>
      </div>
      <section style={{ marginTop: '20px' }}>
        <h3>Certifications</h3>
        <p><strong>Certified React Developer</strong></p>
        <p><strong>Issuing Organization:</strong></p>
        <p><strong>Date:</strong> </p>
      </section>

    </div>
  );
};

export default Education;