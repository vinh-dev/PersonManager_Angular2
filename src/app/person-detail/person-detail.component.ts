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

  @Input() person : Person
  genders = ['Nam', 'Nữ', 'Khác'];
  model = { "year": "2017", "month": "2", "day": "25" };
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    this.getPerson();
    console.log(this.model.day);
    console.log(this.model.month);
    console.log(this.model.year);
  }
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      return;
    }
    else {
      this.personService.getPerson(id).subscribe(person=> this.person = person);
    }
  }

  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    this.personService.updatePerson(this.person)
    .subscribe(() => this.goBack());
  console.log(this.person.Birthday);
  };

}
