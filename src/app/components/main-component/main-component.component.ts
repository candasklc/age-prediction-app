import { Component, OnInit } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  public addedNames: NameObject[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addNewName(newPerson: NameObject) {
    this.addedNames.push(newPerson);
    console.log(this.addedNames)
  }
}
