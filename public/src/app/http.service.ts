import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  gold: number;
  Log=[];

  constructor() { 
    this.gold=0;
  }


  provideGold(){
    return this.gold;
  }
  updateGold(num){
    // console.log(this.gold)
    return this.gold+=num;
  }

  provideLog(){
    return this.Log;
  }
  updateLog(msg){
    this.Log.push(msg);
    return this.Log;
  }


}
