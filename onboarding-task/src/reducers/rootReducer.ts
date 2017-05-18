import { IAction } from '../actions/IAction';
import { itemsListReducer } from './itemsList/itemsListReducer';
import { IAppState } from './IAppState';

export const rootReducer = (prevState: IAppState = {} as IAppState, action: IAction): IAppState => ({
  itemsList: itemsListReducer(prevState.itemsList, action),
});