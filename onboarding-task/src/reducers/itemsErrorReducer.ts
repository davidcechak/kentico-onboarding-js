import { OrderedMap } from 'immutable';
import { IAction } from '../actions/IAction';
import {
  ITEM_POST_FAILED,
  ITEMS_FETCHING_FAILED
} from '../actions/actionTypes';
import { ErrorMessage } from '../models/ErrorMessage';

export const itemsErrorReducer = (state = OrderedMap<string, ErrorMessage>(),
                                  action: IAction): OrderedMap<string, ErrorMessage> => {
  switch (action.type) {
    case ITEM_POST_FAILED:
      return state.set(
        action.payload.id,
        new ErrorMessage({
          id: action.payload.id,
          itemUeid: action.payload.itemUeid,
          message: action.payload.message
        }));

    case ITEMS_FETCHING_FAILED:
      return state.set(
        action.payload.id,
        new ErrorMessage({
          id: action.payload.id,
          message: action.payload.message
        }));

    default:
      return state;
  }
};

