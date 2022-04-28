import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSortedListComponent } from './alphabetical-sorted-list.component';

describe('AlphabeticalSortedListComponent', () => {
  let component: AlphabeticalSortedListComponent;
  let fixture: ComponentFixture<AlphabeticalSortedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabeticalSortedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalSortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
