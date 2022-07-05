import { Component, OnInit } from '@angular/core';
import { AnatomyService } from 'src/app/services/anatomy.service';
import { APPCONSTANT} from 'src/app/constants/anatomy-constnat';
@Component({
  selector: 'app-unisex',
  templateUrl: './unisex.component.html',
  styleUrls: ['./unisex.component.scss']
})
export class UnisexComponent {

  uniSexConfig = this.anatomyService.uniSexConfig;
  id : number;
  public APPCONSTANT = APPCONSTANT;

   constructor(private anatomyService:AnatomyService){
  }

   changeAnatomy(id?:number){
       this.id  = id;
   }
}
