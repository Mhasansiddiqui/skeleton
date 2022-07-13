import { Component, HostListener, Input } from '@angular/core';
import { APPCONSTANT} from '@constants/anatomy-constant';
declare let $: any;

@Component({
  selector: 'app-dynamic-anatomy',
  templateUrl: './dynamic-anatomy.component.html',
  styleUrls: ['./dynamic-anatomy.component.scss']
})
export class DynamicAnatomyComponent  {
  
  @Input() config : object;
  @Input() id : number;
  
  public appConstant = APPCONSTANT;
  
  /**
   * this code will popup body part discription
   * @param event get mouse event
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    var x = event.pageX + 10,
      y = event.pageY + 15;
    var tipw = $('#organs-tip').outerWidth(),
      tiph = $('#organs-tip').outerHeight(),
      x = (x + tipw > $(document).scrollLeft() + $(window).width()) ? x - tipw - (20 * 2) : x
    y = (y + tiph > $(document).scrollTop() + $(window).height()) ? $(document).scrollTop() + $(window).height() - tiph - 10 : y
    $('#organs-tip').css({
      left: x,
      top: y
    })
  }

  /**
   * this code will swap front and back image
   * @param event is current mouse event
   */
  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    if(event.id == 'turn_front'){
      $('#bck_base').hide().animate({
        'opacity': '0'
      }, 300);
      $('#frt_base').show().animate({
        'opacity': '1'
      }, 300)
    } else if(event.id == 'turn_back'){
      $('#frt_base').hide().animate({
        'opacity': '0'
      }, 300);
      $('#bck_base').show().animate({
        'opacity': '1'
      }, 300)
    }
    
  }

  // on mousemove colour will highlight
  @HostListener('mousemove', ['$event.target'])
  onMousemove(event: any) {
    if (event.id && event.id !== 'turn_back' && event.id !== 'turn_front') {
      var _obj = $('#' + event.id);
      $('#organs-tip').show().html(this.config[event.id]?.hover);
      _obj.css({
        'fill': this.config[event.id]?.overColor,
        'fill-opacity': this.config[event.id]?.overOpacity,
        'stroke': this.config[event.id]?.outlineOverColor,
        'stroke-opacity': this.config[event.id]?.outlineOverOpacity
      })
    }
  }

  // on mouseout of body re-colour will fire
  @HostListener('mouseout', ['$event.target'])
  onMouseout(event: any) {
    if (event.id) {
      $('#organs-tip').hide();
      $('#' + event.id).css({
        'fill': this.config[event.id]?.upColor,
        'fill-opacity': this.config[event.id]?.upOpacity,
        'stroke': this.config[event.id]?.outlineUpColor,
        'stroke-opacity': this.config[event.id]?.outlineUpOpacity
      })
    }
  }

  constructor() { }
}
