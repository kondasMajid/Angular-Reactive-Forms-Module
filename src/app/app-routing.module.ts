import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormGroup, FormControl} from '@angular/forms'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  createForm: FormGroup;

  
}
