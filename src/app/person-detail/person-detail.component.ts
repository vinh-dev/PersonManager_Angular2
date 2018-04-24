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

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    this.getPerson();
  }
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.person=null;
      return;
    }
    else {
      this.personService.getPerson(id).subscribe(person => {

        person.Birthday = new Date(person.Birthday);
        this.person = person;
        this.person.Birthday2 = { year: person.Birthday.getFullYear(), month: person.Birthday.getMonth()+1, day: person.Birthday.getDate() };
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    Object.keys(this.person.Birthday2).map(k => this.person.Birthday =
      new Date(this.person.Birthday2["month"]+"-"+this.person.Birthday2["day"]+"-"+this.person.Birthday2["year"] ))

    //this.person.Birthday=this.person.Birthday2.valu
    this.personService.updatePerson(this.person).subscribe(() => this.goBack());
   };

}
