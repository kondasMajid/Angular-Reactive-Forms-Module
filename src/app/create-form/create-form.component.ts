import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  loginForm : FormGroup
  constructor() { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      fullname : new FormControl(),
      email : new FormControl()
    });
  }

  onSubmit() : void {
    console.log(this.loginForm.value)
  }

}
