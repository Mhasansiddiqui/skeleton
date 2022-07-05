import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AnatomyService } from 'src/app/services/anatomy.service';
import { APPCONSTANT} from 'src/app/constants/anatomy-constnat';
declare let $: any;

@Component({
  selector: 'app-dynamic-anatomy',
  templateUrl: './dynamic-anatomy.component.html',
  styleUrls: ['./dynamic-anatomy.component.scss']
})
export class DynamicAnatomyComponent implements OnInit {
  
  @Input() config : object;
  @Input() id : number;
  
  public appConstant = APPCONSTANT;
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    var x = e.pageX + 10,
      y = e.pageY + 15;
    var tipw = $('#organs-tip').outerWidth(),
      tiph = $('#organs-tip').outerHeight(),
      x = (x + tipw > $(document).scrollLeft() + $(window).width()) ? x - tipw - (20 * 2) : x
    y = (y + tiph > $(document).scrollTop() + $(window).height()) ? $(document).scrollTop() + $(window).height() - tiph - 10 : y
    $('#organs-tip').css({
      left: x,
      top: y
    })
  }

  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    console.log(this.config[event.id]);
  }

  @HostListener('mousemove', ['$event.target'])
  onMousemove(event: any) {
    if (event.id) {
      var _obj = $('#' + event.id);
      $('#organs-tip').show().html(this.config[event.id].hover);
      _obj.css({
        'fill': this.config[event.id].overColor,
        'fill-opacity': this.config[event.id].overOpacity,
        'stroke': this.config[event.id].outlineOverColor,
        'stroke-opacity': this.config[event.id].outlineOverOpacity
      })
    }
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseout(event: any) {
    if (event.id) {
      $('#organs-tip').hide();
      $('#' + event.id).css({
        'fill': this.config[event.id].upColor,
        'fill-opacity': this.config[event.id].upOpacity,
        'stroke': this.config[event.id].outlineUpColor,
        'stroke-opacity': this.config[event.id].outlineUpOpacity
      })
    }
  }

  constructor(private anatomyService:AnatomyService) { }

  ngOnInit(): void {
    console.log(this.appConstant)
    $(document).ready(function () {
      $('#bck_base').hide().animate({
        'opacity': '0'
      }, 300);
      $('.go_bck').on('click', function () {
        $('#frt_base').hide().animate({
          'opacity': '0'
        }, 300);
        $('#bck_base').show().animate({
          'opacity': '1'
        }, 300)
      });
      $('.go_frt').on('click', function () {
        $('#bck_base').hide().animate({
          'opacity': '0'
        }, 300);
        $('#frt_base').show().animate({
          'opacity': '1'
        }, 300)
      })
    });

  }
}
