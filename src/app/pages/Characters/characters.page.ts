import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/core/services/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class characters implements OnInit {

  constructor( public personajeService:PersonajesService) { }

  ngOnInit() :void{
    this.personajeService.getAllPerson().subscribe()
  }
  

}
