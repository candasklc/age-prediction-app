import { Component, OnInit } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  public addedNames: NameObject[] = [];
  public theListSortedByName: NameObject[] = [];
  public theListSortedByAge: NameObject[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewName(newName: NameObject): void {
    this.addedNames.push(newName);
    this.theListSortedByName = [...this.addedNames];
    this.theListSortedByAge = [...this.addedNames];
  }
}
