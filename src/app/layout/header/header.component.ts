import { Component, EventEmitter , Output } from '@angular/core';
import { APPCONSTANT } from 'src/app/constants/anatomy-constnat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Output() eventId  = new EventEmitter<number>();
  
  public APPCONSTANT = APPCONSTANT;

  constructor() { }
  
  changeAnatomy(id?: number) {
    this.eventId.emit(id);
  }

}
