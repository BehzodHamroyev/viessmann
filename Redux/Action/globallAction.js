import { dispatch } from '../Store';
import { TOGGLE_SIDE } from '../type';

const toggle = () => {
  const action = { type: TOGGLE_SIDE };
  dispatch(action);
};
export default toggle;
