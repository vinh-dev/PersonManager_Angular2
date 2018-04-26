import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PersonService } from "../person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person
  genders = ['Nam', 'Nữ', 'Khác'];
  convertBirthday: any;
  personAdd: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPerson();
  };

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.personAdd={id:20,FirstName:"",Address:"",Birthday:new Date(),LastName:"",Sex:""}
      this.person = this.personAdd;
      this.convertBirthday = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
    }
    else {
      this.personService.getPerson(id).subscribe(person => {
        person.Birthday = new Date(person.Birthday);
        this.person = person;
        this.convertBirthday = { year: person.Birthday.getFullYear(), month: person.Birthday.getMonth() + 1, day: person.Birthday.getDate() };
      });
    }

  }
  /**back to location */
  goBack(): void {
    this.location.back();
  }
  /**ADD: add person into list */
  add(name:string):void{
    name= name.trim();
    if(!name){return;}
    this.personService.addPerson({name}as Person)
    .subscribe(per => {this.heroes.push(per);
    });
  }
  /**Submit form */
  onSubmit(): void {
    Object.keys(this.convertBirthday).map(k => this.person.Birthday =
      new Date(this.convertBirthday["month"] + "-" + this.convertBirthday["day"] + "-" + this.convertBirthday["year"]));

    this.personService.updatePerson(this.person).subscribe(() => this.goBack());
  };

}
