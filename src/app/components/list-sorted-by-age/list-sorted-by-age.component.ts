import { Component, Input, OnInit } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-list-sorted-by-age',
  templateUrl: './list-sorted-by-age.component.html',
  styleUrls: ['./list-sorted-by-age.component.scss']
})
export class ListSortedByAgeComponent implements OnInit {
  @Input() addedNames: NameObject[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
