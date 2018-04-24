import { Component, OnInit } from '@angular/core';
import {Person} from "../person";
import { PersonService } from "../person.service";
@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {


  lstPerson:Person[];
  genders = ['Nam', 'Nữ'];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getLstPerson();
  }
  getLstPerson(): void {
    this.personService.getLstPerson().subscribe(lst => this.lstPerson = lst);
  }

}
