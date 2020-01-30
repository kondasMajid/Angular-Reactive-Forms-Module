import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createForm : FormGroup
  constructor() { }

  ngOnInit(){
    this.createForm = new FormGroup({
      fullname = new FormControl(),
      email = new FormControl()
    })
  }

}
