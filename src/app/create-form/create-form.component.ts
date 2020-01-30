import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
  
})
export class CreateFormComponent implements OnInit {

  // @Input() name: string;
@Output() onSend :  EventEmitter<string>;
 list: any;
  loginForm : FormGroup
  constructor(private fb: FormBuilder) { 
    this.onSend = new EventEmitter<string>();
  }

  ngOnInit(){
    
  // using form builder
    this.loginForm = this.fb.group({
      fullname: [],
      email: []
    })

    // with form group
    // this.loginForm = new FormGroup({
    //   fullname : new FormControl('enter your name here'),
    //   email : new FormControl()
    // });

    this.loginForm.valueChanges.subscribe((inputValue) => {
      this.onSend.emit(inputValue)
    })
  }

  onSubmit() : void {
  
    this.onSend.emit( this.loginForm.get('fullname').value)
    console.log(this.loginForm.value)
  }
}
