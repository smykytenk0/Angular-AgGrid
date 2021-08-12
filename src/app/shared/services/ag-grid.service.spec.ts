import { AgGridService } from './ag-grid.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

describe('AgGridService', () => {
  let service: AgGridService;
  let store: MockStore;
  const initialState = {isSelection: false}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
    service = new AgGridService(store);
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  })
})
