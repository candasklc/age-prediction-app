import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-list-sorted-by-age',
  templateUrl: './list-sorted-by-age.component.html',
  styleUrls: ['./list-sorted-by-age.component.scss']
})
export class ListSortedByAgeComponent implements OnChanges {
  @Input() addedNames: NameObject[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.sortList();
  }

  private sortList(): void {
    this.addedNames.sort((a, b) => a.age - b.age);
  }

}
