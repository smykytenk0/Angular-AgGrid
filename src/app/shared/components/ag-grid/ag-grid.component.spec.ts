import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgGridService } from '../../services/ag-grid.service';
import { HttpService } from '../../services/http.service';

describe('AgGridComponent', () => {
  let agGridComponent: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;
  let store: MockStore;
  let http: HttpClient;
  let agGridService: AgGridService;
  let httpService: HttpService;
  const initialState = {isSelection: false}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      providers: [
        provideMockStore({ initialState }),
        HttpClient
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    http = TestBed.inject(HttpClient);
    store = TestBed.inject(MockStore);
    agGridService = new AgGridService(store);
    httpService = new HttpService(http);
    agGridComponent = new AgGridComponent(agGridService, httpService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    agGridComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(agGridComponent).toBeTruthy();
  });
});
