import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap, distinctUntilKeyChanged } from "rxjs/operators";

import { Person } from "../person";
import { PersonService } from "../person.service";
import { SwitchView } from '@angular/common/src/directives/ng_switch';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {


  // declare heroes$ as an Observable
  lstPerson$: Observable<Person[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  constructor(private personService: PersonService) { }
  ngOnInit(): void {
    this.lstPerson$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.personService.searchPersones(term)),

    )
  }

}
