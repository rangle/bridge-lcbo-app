export const ACTION_TYPES = {
  handleToggle: 'TOGGLED',
  handleClose: 'CLOSED',
  handleChange: 'CHANGED',
};

export function handleToggle() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: ACTION_TYPES.handleToggle,
      payload: {
        open: !state.nav.open,
      },
    });
  };
}

export function handleClose() {
  return {
    type: ACTION_TYPES.handleClose,
    payload: {
      open: false,
    },
  };
}

export function handleChange(open) {
  return {
    type: ACTION_TYPES.handleChange,
    payload: {
      open: open,
    },
  };
}
