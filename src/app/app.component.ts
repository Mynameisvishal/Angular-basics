import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vishal';
  eatMore = true;
  serverName=" No Server Created";
  stringValue="";
  task4='This is done using ngIf';
  hide=false;

  onUpdateValue(event:any){
    this.serverName=event.target.value;
  }
  changeStringValue(event:any){
    this.stringValue=event.target.value;
  }
  clearStringValue(){
    this.stringValue="";
  }

  constructor(){

    setTimeout(() => {
      this.eatMore = false;
    }, 2000);
  }
}
