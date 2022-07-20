import { Component, OnInit } from '@angular/core';
import { Age, GenderType, HumanSystem } from '@app/enum/investigation-enum';
import { APPCONSTANT } from '@constants/anatomy-constant';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '@app/services/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './vital-check.component.html',
  styleUrls: ['./vital-check.component.scss']
})
export class VitalComponent implements OnInit {

  PatientName: string = 'Petric'
  public Age = Age;
  public GenderType = GenderType;
  public HumanSystem = HumanSystem;
  selectAnatomy: number = null;
  steps: number = 0;

  userForm = new FormGroup<any>({
    name: new FormControl(this.PatientName),
    age: new FormControl(null),
    gender: new FormControl(GenderType.MALE),
    system: new FormControl(null),
  });

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  selectAge(category: any) {
    this.userForm.patchValue({ age: category });
  }

  selectHumanSystem(humanSystem: number) {
    this.steps = 1;
    this.userForm.patchValue({ system: humanSystem });
  }

  onSubmit() {
    if (this.userForm.value.age === Age.Child && this.steps == 0) {
      this.sharedService.user = this.userForm.value;
      this.selectAnatomy = APPCONSTANT.ANATOMY.CHILD;
    }
    else if (this.userForm.value.age > Age.Child && this.steps == 0) {
      this.steps = 1;
    } else if (this.userForm.value.gender == GenderType.MALE && this.steps == 0) {
      this.sharedService.user = this.userForm.value;
      this.selectAnatomy = APPCONSTANT.ANATOMY.UNISEX;
    }
    else if (this.userForm.value.gender == GenderType.FEMALE && this.steps == 0) {
      this.sharedService.user = this.userForm.value;
      this.selectAnatomy = APPCONSTANT.ANATOMY.FEMALE;
    } else if (this.steps == 1) {
      this.sharedService.user = this.userForm.value;
      this.selectAnatomy = this.sharedService.user.system;
    }
  }


}
