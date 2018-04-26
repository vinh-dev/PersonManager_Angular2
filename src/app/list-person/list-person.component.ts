import { Component, OnInit} from '@angular/core';
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {


  lstPerson: Person[];
  constructor(private personService: PersonService) { }
  ngOnInit() {
      this.getLstPerson();
  }

  getLstPerson(): void {
    this.personService.getLstPerson().subscribe(lst => this.lstPerson = lst);
  }

  delete(person: Person): void {
    if (window.confirm("Are you sure to delete " + person.FirstName + " " + person.LastName)) {
      console.log("Delete Success!!!");
      this.lstPerson = this.lstPerson.filter(h => h !== person);
      this.personService.deletePerson(person).subscribe();
    }
  }


}
