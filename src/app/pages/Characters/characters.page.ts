import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/core/services/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class characters implements OnInit {

  constructor( public personajeService:PersonajesService,private router:Router,) { }

  ngOnInit() :void{
    this.personajeService.getAllPerson().subscribe()
  }
  
  public about(){
    this.router.navigate(['/about'])
  }

  public home(){
    this.router.navigate(['/home'])
  }
}
