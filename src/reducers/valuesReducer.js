import { VALUES_TYPES } from '../actions/types'

const defaultState = {
  valuesState: false,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case VALUES_TYPES.SET_VALUES:
      return { ...state, valuesState: !state.valuesState }
    default:
      return state;
  }
};
