import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPanelComponent } from './toolbar-panel.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('ToolbarPanelComponent', () => {
  let component: ToolbarPanelComponent;
  let fixture: ComponentFixture<ToolbarPanelComponent>;
  let store: MockStore;
  const initialState = {isSelection: false};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({ initialState }),
      ],
      declarations: [ ToolbarPanelComponent ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
