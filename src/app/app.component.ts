import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router
  ) {}

  public home(){
    this.router.navigate(['/home'])
  }

  public characters(){
    this.router.navigate(['/characters'])
  }

  public arenas(){
    this.router.navigate(['/arenas'])
  }

  public about(){
    this.router.navigate(['/about'])
  }
}
