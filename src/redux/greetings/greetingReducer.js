/* eslint-disable consistent-return */
import axios from 'axios';

const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GREETINGS';

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

const initialState = {
  greetings: [],
};

export const fetchGreetingsFromApi = () => async (dispatch) => {
  try {
    const result = await axios.get('/api/v1/greetings');
    const data = result.data.greetings;
    dispatch(getGreetings(data));
  } catch (error) {
    return error.message;
  }
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
