import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NameObject } from 'src/app/interfaces/name-object';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.scss']
})
export class AddNameComponent implements OnInit {
  @Output() newNameEvent = new EventEmitter<NameObject>();
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
      this.dataService.getAgeResults(name).subscribe((data) => {
        this.addedNameObject = data;
        this.newNameEvent.emit(this.addedNameObject);
      });
    }
  }
  private nameValidator(name: string): boolean {
    if (name === '') {
      alert('Please enter a name.');
    } else if (name.length < 2 || /\d/.test(name)) {
      alert('Please enter a valid name.');
    } else {
      return true;
    }
    return false;
  }

}
