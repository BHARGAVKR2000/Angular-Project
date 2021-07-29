import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  sharingData = {name: " "};
  private loginMessageSource = new Subject<string>();
  loginMessage$ = this.loginMessageSource.asObservable();
  constructor() { }

  sendMessage(message : any){
    console.log("Inside Interaction service "+message.username);
    console.log(message);
    this.sharingData.name = message;
    this.loginMessageSource.next(message.username);
  }
}
