import { Component, OnInit } from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  lstPerson:Person[];
  constructor() { }

  ngOnInit() {
  }

}
