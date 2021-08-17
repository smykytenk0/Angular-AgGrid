import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableImageComponent } from './table-image.component';
import { mockGridParams } from '../../constants/defaultDataForTesting.config';

describe('TableImageComponent', () => {
  let component: TableImageComponent;
  let fixture: ComponentFixture<TableImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableImageComponent ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('agInit() should work and change url', () => {
    component.agInit(mockGridParams);

    expect(component.url).toEqual(mockGridParams.value.url);
  })
});
