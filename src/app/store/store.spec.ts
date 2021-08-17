import { mockInitialState } from '../shared/constants/defaultDataForTesting.config';
import { StoreActions } from './store.actions';
import { columnDefsWithoutSelection } from '../shared/constants/columnDefs.constants';
import { storeReducer } from './store.reducers';


describe('Store', () => {
  const mockPayload = {
    isSelection: false,
    columnsDefs: columnDefsWithoutSelection
  }

  it('should change isSelection and columnDefs according to payload', () => {
    const action = StoreActions.toggleSelection(mockPayload);
    const state = storeReducer(mockInitialState, action);

    expect(state).toEqual(mockInitialState);
  })
})
