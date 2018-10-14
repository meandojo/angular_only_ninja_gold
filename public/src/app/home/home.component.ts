import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  curGold:number
  activityLog=[];
  constructor(private _httpService: HttpService) { 
  }

  ngOnInit() {
    console.log("This is the activity log:", this.activityLog)
    this.getGold();
  }

  getGold(){
    this.curGold=this._httpService.provideGold();
  }
  
  someGold(place:String){
    var moolah=0;
    var luck ="Earned"
    if(place=="farm"){
      
      moolah=Math.floor((Math.random()*4)+2);
      console.log("you clicked the farm");
    }
    else if(place=="cave"){
      moolah=Math.floor((Math.random()*4)+7);
      console.log("you clicked the cave");
    }
    else if(place=="house"){
      moolah=Math.floor((Math.random()*6)+15);
      console.log("you clicked the house");
    }
    else if(place=="casino"){
      var chance = Math.floor(Math.random()*2)
      if(chance==1){
        luck ="Lost"
        moolah = -100;
      }else{
        moolah = 100;
      }
      console.log("you clicked the casino");
    }
    console.log(moolah);
    var message = `You ${luck} ${moolah} gold at the ${place}`
    this.activityLog = this._httpService.updateLog(message);
    console.log(this.activityLog);

    //Update Service's gold
    this._httpService.updateGold(moolah);
    //Get current gold
    this.getGold();
  }


  

}
