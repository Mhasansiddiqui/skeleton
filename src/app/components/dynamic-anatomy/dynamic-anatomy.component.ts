import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { iSkeleton } from '@interface/skeleton-interface';
import { APPCONSTANT } from '@constants/anatomy-constant';

@Component({
  selector: 'app-dynamic-anatomy',
  templateUrl: './dynamic-anatomy.component.html',
  styleUrls: ['./dynamic-anatomy.component.scss']
})
export class DynamicAnatomyComponent {

  @Input() config: iSkeleton;
  @Input() id: number;

  public appConstant : any = APPCONSTANT;
  @ViewChild('organsTip') organsTip: ElementRef;
  @ViewChild('frtBase') frtBase: ElementRef;

  /**
   * this code will print popup body part discription
   * @param event get mouse event
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    var x = event.pageX + 10,
      y = event.pageY + 15;
    var tipw = this.organsTip.nativeElement.style.clientWidth,
      tiph = this.organsTip.nativeElement.style.clientHeight,
      x = (x + tipw > document.scrollingElement.scrollLeft + window.innerWidth) ? x - tipw - (20 * 2) : x
    y = (y + tiph > document.scrollingElement.scrollTop + window.innerHeight) ?  document.scrollingElement.scrollTop + window.innerHeight - tiph - 10 : y

    this.organsTip.nativeElement.style.left = x + 'px';
    this.organsTip.nativeElement.style.top = y + 'px';
  }

  /**
   * this code will swap front and back image
   * @param event is current mouse event
   */
  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    if (event.id) {
      console.log(this.config[event.id]);
    }
    if (event.id == 'turn_front') {
      const bacBase = document.getElementById('bck_base');
      const frtBase = document.getElementById('frt_base');
      bacBase.style.display = 'none';
      frtBase.style.display = 'block';
    } else if (event.id == 'turn_back') {
      const bacBase = document.getElementById('bck_base');
      const frtBase = document.getElementById('frt_base');
      bacBase.style.display = 'block';
      frtBase.style.display = 'none';

    }

  }

  // on mousemove popup colour will highlight
  @HostListener('mousemove', ['$event.target'])
  onMousemove(event: any) {
    if (event.id && event.id !== 'turn_back' && event.id !== 'turn_front') {

      this.organsTip.nativeElement.style.display = 'inline';
      this.organsTip.nativeElement.innerHTML = this.config[event.id]?.hover;

      const currentObj = document.getElementById(event.id);
      currentObj.style.fill = this.config[event.id]?.overColor;
      currentObj.style.fillOpacity = this.config[event.id]?.overOpacity;
      currentObj.style.stroke = this.config[event.id]?.outlineOverColor;
      currentObj.style.strokeOpacity = this.config[event.id]?.outlineOverOpacity;

    }
  }

  // on mouseout of body popup re-colour will fire
  @HostListener('mouseout', ['$event.target'])
  onMouseout(event: any) {
    if (event.id) {
      this.organsTip.nativeElement.style.display = 'none';
      const currentObj = document.getElementById(event.id);
      currentObj.style.fill = this.config[event.id]?.upColor;
      currentObj.style.fillOpacity = this.config[event.id]?.upOpacity;
      currentObj.style.stroke = this.config[event.id]?.outlineUpColor;
      currentObj.style.strokeOpacity = this.config[event.id]?.outlineUpOpacity;
    }
  }

  constructor() { }
}
