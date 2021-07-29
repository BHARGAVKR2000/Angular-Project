import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionService { 
  
  name : string = "";
  userDetails : any;
  private loginMessageSource = new Subject<any>();
  loginMessage$ = this.loginMessageSource.asObservable();
  constructor() {}

  sendMessage(message: any) {
    console.log('Inside Interaction service ' + message.username);
    this.userDetails = message;
    console.log(message.password);
    this.name = message.username;
    
    this.loginMessageSource.next("sample message");
  }

  getDetails(){
    return this.userDetails;
  }
}
