import {ACTION_TYPES} from '../actions/navigation';

const INITIAL_STATE = {
  open: false,
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.handleToggle:
  case ACTION_TYPES.handleClose:
  case ACTION_TYPES.handleChange:
    return {...state, ...{open: payload.open}};
  default:
    return state;
  }
}
