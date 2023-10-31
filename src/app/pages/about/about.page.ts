import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/core/services/personajes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private router:Router,
    public persService:PersonajesService
  ) {}

  ngOnInit() {
    this.persService.getAllPerson().subscribe();
  }

<<<<<<< HEAD
  public characters(){
    this.router.navigate(['/characters'])
  }

  public home(){
    this.router.navigate(['/home'])
  }
  

=======
>>>>>>> a416da3cb5f938afe25b96e8d4d2a8b0450a4280
}
