import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-authorisation-page',
  templateUrl: './authorisation-page.component.html',
  styleUrls: ['./authorisation-page.component.scss']
})
export class AuthorisationPageComponent implements OnInit {

  public authorisationFrom: FormGroup = new FormGroup({
    userName: new FormControl(),
    userPassword: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  public OnCLickAuthorisation() {
    console.log(this.authorisationFrom.value);
  }

}
