import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs';
import { NameObject } from 'src/app/interfaces/name-object';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.scss']
})
export class AddNameComponent implements OnInit {
  @Output() newNameEvent = new EventEmitter<NameObject>();
  @Input() public allNames: NameObject[] = [];
  private specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  public nameInput = '';
  public addedNameObject: NameObject = {
    name: '',
    age: 0,
    count: 0
  }

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  public onSubmit(name: string): void {
    if (this.nameValidator(name)) {
      this.nameInput = '';
      this.dataService.getAgeResults(name)
        .subscribe((data) => {
          this.addedNameObject = data;
          this.newNameEvent.emit(this.addedNameObject);
        });
    }
  }
  private nameValidator(name: string): boolean {
    if (name === '') {
      alert('Please enter a name.');
    } else if (name.length < 2 || /\d/.test(name) || this.specialChars.test(name)) {
      alert('Please enter a valid name.');
    } else if (this.allNames.some(i => i.name.includes(name))) {
      alert('The name is already added.');
    } else {
      return true;
    }
    return false;
  }

}
