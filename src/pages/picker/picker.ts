import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {

  // RGB Values

  public rgb_r:number;
  public rgb_g:number;
  public rgb_b:number;
  public rgb_a:number;

  // Hex Code

  public rgba_hex:string;

  // Is Expanded The New Color's Div?
  public isExpanded:boolean;
  // Expandable Div's Style
  public expandableDivStyle:any;



  constructor(public navCtrl: NavController) {

    // initialize with black color
    this.rgb_r = this.rgb_g = this.rgb_b = 0;
    this.rgb_a = 100;
    this.rgba_hex = "#000000FF";
    this.isExpanded = false;
    this.expandableDivStyle = {display: 'inline-block',width: '50vw', height: '50vw'};
  }

  // Trigger New Color Div to FullScreen/Inline

  triggerExpand():void{
    this.isExpanded = !this.isExpanded;
    this.expandableDivStyle = this.isExpanded ? {position: 'absolute','z-index': '999',top: '0px', left: '0px' ,width: '100vw', height: '100vh'} : {display: 'inline-block',width: '50vw', height: '50vw'};
  }

}
