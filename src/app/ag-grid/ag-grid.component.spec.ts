import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgGridService } from '../shared/services/ag-grid.service';
import { HttpService } from '../shared/services/http.service';
import {
  contextMenuItemsForDefaultParams, contextMenuItemsForNonDefaultParams,
  mockRootState
} from '../shared/constants/defaultDataForTesting.constants';

describe('AgGridComponent', () => {
  let agGridComponent: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;
  let agGridService: AgGridService;
  let httpService: HttpService;
  const initialState = mockRootState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgGridComponent],
      providers: [
        provideMockStore({initialState}),
        HttpClient,
        AgGridService,
        HttpService,
        AgGridComponent
      ],
      imports: [
        HttpClientTestingModule,
      ]
    })
      .compileComponents();

    agGridService = TestBed.inject(AgGridService);
    httpService = TestBed.inject(HttpService);
    agGridComponent = TestBed.inject(AgGridComponent);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    agGridComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(agGridComponent).toBeTruthy();
  });

  it('getContextMenuItems() should return defaultParams', () => {
    const spy = spyOn(agGridComponent, 'getContextMenuItems').and.callThrough();

    agGridComponent.getContextMenuItems(contextMenuItemsForDefaultParams);

    expect(spy).toHaveBeenCalledTimes(1);

  })

  it('getContextMenuItems() should return custom params', () => {
    const spy = spyOn(agGridComponent, 'getContextMenuItems').and.callThrough();

    agGridComponent.getContextMenuItems(contextMenuItemsForNonDefaultParams);

    expect(spy).toHaveBeenCalledTimes(1);

  })

  it('ngOnInit() calls both functions from services getVideosData() and selectContextMenuItems()', () => {
    agGridComponent.ngOnInit();

    agGridComponent.rowData$.subscribe(data => {
      expect(data[0].length).toBeGreaterThan(0);
    })

    agGridComponent.columnDefs$.subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    })
  });
  it('')
});

