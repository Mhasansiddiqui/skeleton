import { Component, EventEmitter , Output } from '@angular/core';
import { APPCONSTANT } from '@constants/anatomy-constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Output() eventId  = new EventEmitter<number>();
  
  public APPCONSTANT = APPCONSTANT;
  public currentId : number = APPCONSTANT.ANATOMY.UNISEX;

  constructor() { }
  
  changeAnatomy(id?: number) {
    this.currentId = id;
    this.eventId.emit(id);
  }

}
