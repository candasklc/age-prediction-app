import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSortedByAgeComponent } from './list-sorted-by-age.component';

describe('ListSortedByAgeComponent', () => {
  let component: ListSortedByAgeComponent;
  let fixture: ComponentFixture<ListSortedByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSortedByAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSortedByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
