import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  
  
  log(username : any){
    console.log(username);
  }

  
  constructor(private router: Router, private interactionService : InteractionService) { }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    this.interactionService.sendMessage(f.value);
    console.log("interaction method called");
    this.router.navigate(['home']);
  }

  passData(){
    
    this.interactionService.sendMessage("Message Passed form login..");
  }

 

  ngOnInit(): void {
    
  }


}
