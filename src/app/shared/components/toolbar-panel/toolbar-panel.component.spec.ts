import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPanelComponent } from './toolbar-panel.component';
import { AgGridService } from '../../services/ag-grid.service';

describe('ToolbarPanelComponent', () => {
  let toolbarPanelComponent: ToolbarPanelComponent;
  let fixture: ComponentFixture<ToolbarPanelComponent>;
  let agGridService: AgGridService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        AgGridService
      ],
      declarations: [ ToolbarPanelComponent ]
    })
    .compileComponents();

    agGridService = TestBed.inject(AgGridService)
    toolbarPanelComponent = new ToolbarPanelComponent(agGridService)
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
