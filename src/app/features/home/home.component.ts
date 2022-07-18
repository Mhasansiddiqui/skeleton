import { Component, OnInit } from '@angular/core';
import { Age, GenderType } from '@app/enum/investigation-enum';
import { SharedService } from '@app/services/shared-service.service';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PatientName : string =  'Petric'
  public Age = Age;
  public GenderType = GenderType;

  userForm = new FormGroup<any>({
    name : new FormControl(this.PatientName),
    age: new FormControl(null),
    gender: new FormControl(GenderType.MALE)
  });

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void { }

  selectAge(category: any) {
    this.userForm.patchValue({age : category});
  }

  onSubmit(){
    console.log(this.userForm.value)
  }


}
