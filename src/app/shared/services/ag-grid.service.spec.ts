import { AgGridService } from './ag-grid.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

describe('AgGridService', () => {
  let service: AgGridService;
  let store: MockStore;
  const initialState = {isSelection: false}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
    service = new AgGridService();
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  })

  it('correct RowData', () => {
    expect()
  })
})
