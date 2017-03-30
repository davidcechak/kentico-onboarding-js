import * as Immutable from 'immutable';

import {ITEM_CREATED, ITEM_DELETED, ITEM_EDITED} from '../actions/actionTypes';
import {Item} from '../models/Item';


const itemsDataReducer = (state: Immutable.Map<string,Item>, action: any) => {
  if (typeof state === 'undefined') {
    state = Immutable.Map<string,Item>();
  }
  switch (action.type) {
    case ITEM_EDITED:
      return state.setIn([action.id, 'value'], action.value);

    case ITEM_CREATED:
      return state.set(action.id, action.value);

    case ITEM_DELETED:
      return state.delete(action.id);

    default:
      return state;
  }
};

export { itemsDataReducer };
