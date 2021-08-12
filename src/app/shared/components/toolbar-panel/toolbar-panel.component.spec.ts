import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPanelComponent } from './toolbar-panel.component';
import { AgGridService } from '../../services/ag-grid.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('ToolbarPanelComponent', () => {
  let toolbarPanelComponent: ToolbarPanelComponent;
  let fixture: ComponentFixture<ToolbarPanelComponent>;
  let agGridService: AgGridService;
  let store: MockStore;
  const initialState = {isSelection: false}

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
});
