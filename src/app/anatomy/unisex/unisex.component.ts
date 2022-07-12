import { Component, Output, OnInit } from '@angular/core';
import { AnatomyService } from 'src/app/services/anatomy.service';
import { APPCONSTANT} from 'src/app/constants/anatomy-constnat';

@Component({
  selector: 'app-unisex',
  templateUrl: './unisex.component.html',
  styleUrls: ['./unisex.component.scss']
})
export class UnisexComponent implements OnInit {

  uniSexConfig = this.anatomyService.uniSexConfig;
  id:number;
  public appConstant = APPCONSTANT;

   constructor(private anatomyService:AnatomyService){
  }

  ngOnInit(){
    this.changeAnatomy(this.appConstant.ANATOMY.UNISEX);
  }
   changeAnatomy(id?:number){
       this.id  = id;
   }
}
