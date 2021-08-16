import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTitleComponent } from './table-title.component';
import { mockGridParams } from '../../constants/defaultDataForTesting.constants';

describe('TableTitleComponent', () => {
  let component: TableTitleComponent;
  let fixture: ComponentFixture<TableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('agInit() should work and change link and videoTitle', () => {
    component.agInit(mockGridParams);

    expect(component.link).toBe(`https://www.youtube.com/watch?v=${mockGridParams.value.id.videoId}`);

    expect(component.videoTitle).toBe(mockGridParams.value.snippet.title);
  })
});
