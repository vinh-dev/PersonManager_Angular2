import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
  selector: 'app-dx-lstperson',
  templateUrl: './dx-lstperson.component.html',
  styleUrls: ['./dx-lstperson.component.css']
})
export class DxLstpersonComponent implements OnInit {

  dataSource: Person[];
  genders = ['Nam', 'Nữ', 'Khác'];

 constructor(service: PersonService) {
    service.getLstPerson().subscribe(lst => this.dataSource = lst);
  }
  ngOnInit() {

  }
}
