import { IAction } from '../../actions/IAction';
import {
  ITEMS_FETCHING_FAILED,
  ITEMS_FETCHING_SUCCEED,
  ITEMS_FETCHING_STARTED
} from '../../actions/actionTypes';

const itemsIsFetchingReducer = (state = false, action: IAction,) => {
  switch (action.type) {
    case ITEMS_FETCHING_STARTED:
      return true;

    case ITEMS_FETCHING_FAILED:
    case ITEMS_FETCHING_SUCCEED:
      return false;

    default:
      return state;
  }
};

export { itemsIsFetchingReducer };