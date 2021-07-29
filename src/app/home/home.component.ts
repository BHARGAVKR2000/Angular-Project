import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
      this.interactionService.loginMessage$.subscribe(
        message => {
          console.log("Inside home component")
          console.log(message);
          alert(message);
        }
      );
  }

}
