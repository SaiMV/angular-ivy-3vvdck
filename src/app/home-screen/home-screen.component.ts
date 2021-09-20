import { Component } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {

  constructor() { }
  openSlider:any;
  getClass(){
    if(this.openSlider === undefined ){
      return 'set-left'
    }else{
     return this.openSlider ? 'move-to-right':'move-to-left'
    }
  }  

}
