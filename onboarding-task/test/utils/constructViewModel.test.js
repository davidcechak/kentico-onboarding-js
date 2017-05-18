import { Item } from '../../src/models/Item';
import { ItemFlags } from '../../src/models/ItemFlags';
import { constructViewModel, constructMemoizedViewModel } from '../../src/utils/constructViewModel';

describe('constructViewModel', () => {
  const id = 'da5cbf5f-2d20-4945-b8d2-4cc3b6be1542';
  const index = 42;
  const item = new Item({
    id,
    value: '666',
  });
  const itemFlags = new ItemFlags({
    id,
    editMode: false,
    isSavedInDatabase: false,
  });
  const expectedItemViewModel = {
    id: item.id,
    value: item.value,
    isInEditMode: itemFlags.editMode,
    isSavedInDatabase: itemFlags.editMode,
    index,
  };

  it('constructViewModel returns correct IItemViewModel', () => {
    const actualItemViewModel = constructViewModel(item, itemFlags, index);

    expect(actualItemViewModel).toEqual(expectedItemViewModel);
  });

  it('constructMemoizedViewModel return memoized IItemViewModel', () => {
    const itemViewModel = constructMemoizedViewModel(item, itemFlags, index);
    const memoizedItemViewModel = constructMemoizedViewModel(item, itemFlags, index);

    expect(itemViewModel).toBe(memoizedItemViewModel);
  });
});