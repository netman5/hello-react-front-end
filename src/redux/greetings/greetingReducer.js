import axios from "axios"

const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GREETINGS'

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
})


const initialState = {
    greetings: []
}

export const fetchGreetingsFromApi = () => async (dispatch) => {
    try {
        const result = await axios.get('http://localhost:3000/api/v1/greetings');
        const data = result.data.greetings
        dispatch(getGreetings(data));
    } catch (error) {
        console.log(error.message);
    }
  };

const greetingReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer