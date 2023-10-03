const initialstate = {
  data: [],
};

const get_api_data = (state = initialstate, {type, payload}) => {
  switch (type) {
    case 'success':
      return {
        ...state,
        data: payload.data ? payload.data : [],
      };
    default:
      return state;
  }
};

export default get_api_data;
