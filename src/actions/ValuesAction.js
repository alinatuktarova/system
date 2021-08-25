import { createAction } from './actionCreator';
import { VALUES_TYPES } from './types'

export const setValue = createAction(VALUES_TYPES.SET_VALUES)
