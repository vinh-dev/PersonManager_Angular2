import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxLstpersonComponent } from './dx-lstperson.component';

describe('DxLstpersonComponent', () => {
  let component: DxLstpersonComponent;
  let fixture: ComponentFixture<DxLstpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxLstpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxLstpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
