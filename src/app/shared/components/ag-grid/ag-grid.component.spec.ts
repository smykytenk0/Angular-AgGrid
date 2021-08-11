import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;
  let store: MockStore;
  const initialState = {isSelection: false}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],

    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
