import axios from 'axios';

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get('/data.json'); 
    dispatch({
      type: 'SET_DATA',
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
