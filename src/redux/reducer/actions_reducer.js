const initialstate = {
  loading: false,
  error: null,
};

const actions_reducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case 'start_loading':
      return {
        ...state,
        loading: true,
      };
    case 'stop_loading':
      return {
        ...state,
        loading: false,
      };
    case 'error_found':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default actions_reducer;
