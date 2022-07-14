import { Component, EventEmitter , Output } from '@angular/core';
import { APPCONSTANT } from '@constants/anatomy-constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Output() eventId :EventEmitter<number> = new EventEmitter<number>();
  
  public APPCONSTANT : any = APPCONSTANT;
  public currentId : number = APPCONSTANT.ANATOMY.UNISEX;

  constructor() { }
  
  /**
   * this code will emit current anatomy value
   * @param id its for passing current value
   */
  changeAnatomy(id?: number) {
    this.currentId = id;
    this.eventId.emit(id);
  }

}
