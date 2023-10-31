import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/core/services/personajes.service';
import { PersonajeInfoComponent } from 'src/app/shared/components/personaje-info/personaje-info.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
pers: any;

  constructor(
    private router:Router,
    public personaje:PersonajesService,
  ) {}
<<<<<<< HEAD

  ngOnInit(): void {
      
  }

  public Characters(){
    this.router.navigate(['/characters'])
  }
  public about(){
    this.router.navigate(['/about'])
=======
  ngOnInit() {
>>>>>>> a416da3cb5f938afe25b96e8d4d2a8b0450a4280
  }
}
