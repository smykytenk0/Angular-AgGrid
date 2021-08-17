import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import { AgGridService } from './ag-grid.service';
import { columnDefsWithoutSelection } from '../constants/columnDefs.constants';
import { mockRootState } from '../constants/defaultDataForTesting.config';

describe('AgGridService', () => {
  let agGridService: AgGridService;
  let store: MockStore;
  const isSelection = false;
  const initialState = mockRootState

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
    agGridService = new AgGridService(store);
  })

  it('should create', () => {
    expect(agGridService).toBeTruthy();
  })

  it('dispatchToggleSelection() should dispatch data to store', () => {
    const spy = spyOn(agGridService, 'dispatchToggleSelection').and.callThrough();

    agGridService.dispatchToggleSelection(isSelection, columnDefsWithoutSelection);

    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('selectContextMenuItems() should return context menu items as observable', () => {
    const spy = spyOn(agGridService, 'selectContextMenuItems').and.callThrough();

    agGridService.selectContextMenuItems().subscribe(data => expect(data.length).toBeGreaterThan(0));

    expect(spy).toHaveBeenCalledTimes(1);
  })
})
