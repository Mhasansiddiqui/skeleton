import { Component, OnInit } from '@angular/core';
import { APPCONSTANT } from '@constants/anatomy-constant';
import { UNISEX_CONFIG_SETTINGS } from '@settings/unisex-config';
import { SKELETON_CONFIG_SETTINGS } from '@settings/skeleton-config';
import { iSkeleton } from '@interface/skeleton-interface';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit {

  public config: iSkeleton;
  id: number;
  public appConstant = APPCONSTANT;

  constructor() { }

  ngOnInit() {
    this.changeAnatomy(this.appConstant.ANATOMY.UNISEX);
  }
  changeAnatomy(id?: number) {
    this.id = id;
    if (this.appConstant.ANATOMY.SKELETON === this.id) {
      this.config = SKELETON_CONFIG_SETTINGS;
    } else if (this.appConstant.ANATOMY.CHILD === this.id || this.appConstant.ANATOMY.UNISEX === this.id) {
      this.config = UNISEX_CONFIG_SETTINGS;
    }
  }
}
