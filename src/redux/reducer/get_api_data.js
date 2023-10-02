const initialstate = {
  data: [],
  loading: false,
  error: null,
};

const get_api_data = (state = initialstate, {type, payload}) => {
  switch (type) {
    case 'start_loading':
      return {
        ...state,
        loading: true,
      };
    case 'success':
      return {
        ...state,
        data: payload.data ? payload.data : [],
        loading: false,
      };
    case 'error':
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default get_api_data;
