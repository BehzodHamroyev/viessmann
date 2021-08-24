import { TOGGLE_SIDE } from '../type';

const initialState = {
  sidebar: true,
};
const reuder = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE:
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
};

export default reuder;
