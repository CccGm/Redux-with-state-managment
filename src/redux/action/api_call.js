import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
  },
  headers: {
    'X-RapidAPI-Key': 'ecd3d77cc4mshd28c547f12a61a8p16272ejsn62a9e60b32b0',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

export const api_call = data => async dispatch => {
  dispatch({type: 'start_loading'});
  try {
    await axios.request(options).then(res => {
      dispatch({type: 'success', payload: res});
      console.log('successs');
    });
  } catch (error) {
    dispatch({type: 'error_found', payload: error});
    console.log(error);
  }
  dispatch({type: 'stop_loading'});
};
