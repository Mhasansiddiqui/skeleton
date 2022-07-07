import { Component, Output } from '@angular/core';
import { AnatomyService } from 'src/app/services/anatomy.service';
@Component({
  selector: 'app-unisex',
  templateUrl: './unisex.component.html',
  styleUrls: ['./unisex.component.scss']
})
export class UnisexComponent {

  uniSexConfig = this.anatomyService.uniSexConfig;
  id:number;

   constructor(private anatomyService:AnatomyService){
  }

   changeAnatomy(id?:number){
       this.id  = id;
   }
}
