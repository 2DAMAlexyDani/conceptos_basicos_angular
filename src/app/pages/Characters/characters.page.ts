import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/core/services/personajes.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor( public personajeService:PersonajesService) { }

  ngOnInit() :void{
    this.personajeService.getAllPerson().subscribe();
  }

}
