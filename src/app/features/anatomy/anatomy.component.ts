import { Component, Input, OnInit } from '@angular/core';
import { APPCONSTANT } from '@constants/anatomy-constant';
import { UNISEX_CONFIG_SETTINGS } from '@settings/unisex-config';
import { SKELETON_CONFIG_SETTINGS } from '@settings/skeleton-config';
import { ORGAN_CONFIG_SETTINGS } from '@settings/organ-config';
import { FEMALE_CONFIG_SETTINGS } from '@settings/female-config';
import { iSkeleton } from '@interface/skeleton-interface';
import { MALE_CONFIG_SETTINGS } from '@settings/male-config';
import { CHILD_CONFIG_SETTINGS } from '@settings/child-config';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit {

  public config: iSkeleton;
  id: number;
  public appConstant : any = APPCONSTANT;
  @Input() selectedAnatomy : number;

  constructor() { }

  ngOnInit() {
    this.changeAnatomy(this.selectedAnatomy);
  }
  changeAnatomy(id?: number) {
    this.id = id;
    if (this.appConstant.ANATOMY.SKELETON === this.id) {
      this.config = SKELETON_CONFIG_SETTINGS;
    } else if (this.appConstant.ANATOMY.CHILD === this.id) {
      this.config = CHILD_CONFIG_SETTINGS;
    } else if(this.appConstant.ANATOMY.UNISEX === this.id){
      this.config = UNISEX_CONFIG_SETTINGS;
    } else if(this.appConstant.ANATOMY.ORGAN === this.id){
      this.config = ORGAN_CONFIG_SETTINGS;
    } else if(this.appConstant.ANATOMY.FEMALE === this.id){
      this.config = FEMALE_CONFIG_SETTINGS;
    } else if(this.appConstant.ANATOMY.MALE === this.id){
      this.config = MALE_CONFIG_SETTINGS;
    }
  }
}
