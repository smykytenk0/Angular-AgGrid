import { AgGridService } from './ag-grid.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgGridService', () => {
  let service: AgGridService;
  let store: MockStore;
  let http: HttpClient;
  const initialState = {isSelection: false}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        HttpClient
      ],
    });
    http = TestBed.inject(HttpClient);
    store = TestBed.inject(MockStore);
    service = new AgGridService(store, http);
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  })
})
