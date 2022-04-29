import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-alphabetical-sorted-list',
  templateUrl: './alphabetical-sorted-list.component.html',
  styleUrls: ['./alphabetical-sorted-list.component.scss']
})
export class AlphabeticalSortedListComponent implements OnChanges {
  @Input() addedNames: NameObject[] = [];
  public columnsToDisplay: string[] = ['name', 'age', 'count'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.sortList();
  }
  private sortList(): void {
    this.addedNames.sort((a, b) => a.name.localeCompare(b.name));
  }

}
