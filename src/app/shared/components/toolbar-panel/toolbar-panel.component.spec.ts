import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ToolbarPanelComponent } from './toolbar-panel.component';
import { AgGridService } from '../../services/ag-grid.service';
import { mockRootState } from '../../constants/defaultDataForTesting.config';
import { columnDefsWithSelection } from '../../constants/columnDefs.constants';

describe('ToolbarPanelComponent', () => {
  let toolbarPanelComponent: ToolbarPanelComponent;
  let fixture: ComponentFixture<ToolbarPanelComponent>;
  let agGridService: AgGridService;
  let store: MockStore;
  const initialState = mockRootState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        AgGridService,
        provideMockStore({ initialState }),
      ],
      declarations: [ ToolbarPanelComponent ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    agGridService = new AgGridService(store);
    toolbarPanelComponent = new ToolbarPanelComponent(agGridService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPanelComponent);
    toolbarPanelComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(toolbarPanelComponent).toBeTruthy();
  });

  it('agInit() should work', () => {
    const spy = spyOn(toolbarPanelComponent, 'agInit').and.callThrough();

    toolbarPanelComponent.agInit();

    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('toggleSelection() should change selection and columnDefs fields and dispatch data', () => {
    toolbarPanelComponent.toggleSelection();

    expect(toolbarPanelComponent.selection).toBeTruthy();

    expect(toolbarPanelComponent.columnsDefs).toEqual(columnDefsWithSelection)
  })
});
