
import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name : string = "";
  message : string = "defalt message";
  loginDetails : any;
  constructor(private interactionService : InteractionService) { }

  ngOnInit(){
    this.loginDetails = this.interactionService.getDetails();
  }

}
