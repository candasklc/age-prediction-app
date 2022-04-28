import { Component, Input, OnInit } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-alphabetical-sorted-list',
  templateUrl: './alphabetical-sorted-list.component.html',
  styleUrls: ['./alphabetical-sorted-list.component.scss']
})
export class AlphabeticalSortedListComponent implements OnInit {
  @Input() addedNames: NameObject[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
