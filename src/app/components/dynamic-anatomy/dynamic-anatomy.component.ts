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

  public appConstant: any = APPCONSTANT;
  @ViewChild('organsTip') organsTip: ElementRef;

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
    y = (y + tiph > document.scrollingElement.scrollTop + window.innerHeight) ? document.scrollingElement.scrollTop + window.innerHeight - tiph - 10 : y

    this.organsTip.nativeElement.style.left = x + 'px';
    this.organsTip.nativeElement.style.top = y + 'px';
  }

  /**
   * this code will swap front and back image
   * @param event is current mouse event
   */
  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    if (event.id && this.config[event.id]?.enable) {
      this.highlightOrgan(event);
      this.config[event.id].enable = false;
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
    this.highlightOrgan(event);
  }

  // on mouseout of body popup reset colour will fire
  @HostListener('mouseout', ['$event.target'])
  onMouseout(event: any) {
    this.resetHiglightOrgan(event);
  }

  // on mouseout of body popup re-colour will fire
  @HostListener('dblclick', ['$event.target'])
  onMousedblClick(event: any) {
    this.highlightOrgan(event);
    this.config[event.id].enable = true;
  }

  /**
   * this code will highlight organs areas 
   * @param event is passing current event object
   */
  highlightOrgan(event: any) {
    if (event.id && event.id !== 'turn_back' && event.id !== 'turn_front' && this.config[event.id]?.enable) {
      this.organsTip.nativeElement.style.display = 'inline';
      this.organsTip.nativeElement.innerHTML = this.config[event.id]?.hover;
      const currentObj = document.getElementById(event.id);
      let { overColor, overOpacity, outlineOverColor, outlineOverOpacity } = this.config[event.id];
      this.changeStyle(currentObj, overColor, overOpacity, outlineOverColor, outlineOverOpacity);
    }
  }

  /**
   * this code will reset highlight organs colour
   * @param event is passing current event object
   */
  resetHiglightOrgan(event: any) {
    if (event.id && this.config[event.id]?.enable) {
      this.organsTip.nativeElement.style.display = 'none';
      const currentObj = document.getElementById(event.id);
      let { upColor, upOpacity, outlineUpColor, outlineUpOpacity } = this.config[event.id];
      this.changeStyle(currentObj, upColor, upOpacity, outlineUpColor, outlineUpOpacity);
    }
  }

  /**
   *  this code will update colours of object
   * @param currentObj is current object
   * @param fill will set colour
   * @param fillOpacity will set opacity 
   * @param stroke will set stroke
   * @param strokeOpacity will set strock opacity
   */
  changeStyle(currentObj: any, fill: string, fillOpacity: string, stroke: string, strokeOpacity: string) {
    currentObj.style.fill = fill;
    currentObj.style.fillOpacity = fillOpacity;
    currentObj.style.stroke = stroke;
    currentObj.style.strokeOpacity = strokeOpacity;
  }

  constructor() { }
}
