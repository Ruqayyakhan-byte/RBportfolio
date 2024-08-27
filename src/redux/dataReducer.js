const initialState = {
    about: {},
    education: [],
    contact: {}
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  