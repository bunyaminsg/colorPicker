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

  // Do RGBA/Hex conversion when color changed

  onRGBChanged():void{
    this.rgb_r = (this.rgb_r > 255) ? 255 : 1*this.rgb_r;
    this.rgb_g = (this.rgb_g > 255) ? 255 : 1*this.rgb_g;
    this.rgb_b = (this.rgb_b > 255) ? 255 : 1*this.rgb_b;
    this.rgb_a = (this.rgb_a > 100) ? 100 : 1*this.rgb_a;
    this.rgba_hex = this.rgbaToHex(this.rgb_r,this.rgb_g,this.rgb_b,this.rgb_a);
  }

  onHexChanged():void{
    var color = this.hexToRgba(this.rgba_hex);
    this.rgb_r = color.r;
    this.rgb_g = color.g;
    this.rgb_b = color.b;
    this.rgb_a = color.a;
  }

  // RGBA <-> Hex Converters

  intToHex(x:number):string{
    var hex = x.toString(16);
    return hex.length == 2 ? hex : "0" + hex;
  }

  rgbaToHex(r:number,g:number,b:number,a:number):string{
    return "#" + this.intToHex(r) + this.intToHex(g) + this.intToHex(b) + this.intToHex(Math.round((a/100)*255));
  }

  hexToRgba(hex:string):any{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: 100
    } : (result2 ? {
      r: parseInt(result2[1], 16),
      g: parseInt(result2[2], 16),
      b: parseInt(result2[3], 16),
      a: (Math.round((parseInt(result2[4], 16) * 100) / 255))
    } : {r:0,g:0,b:0,a:0});
  }

}
