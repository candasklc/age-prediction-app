import { Component, OnInit } from '@angular/core';
import { PersonInfo } from 'src/app/interfaces/person-info';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.scss']
})
export class AddNameComponent implements OnInit {
  public name = '';
  public addedPerson: PersonInfo = {
    name: '',
    age: 0,
    count: 0
  }


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.getAgeResults(this.name).subscribe((data) => {
      this.addedPerson = data;
    });
  }

}
