import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/core/services/personajes.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router:Router,
    public personaje:PersonajesService,
  ) {}

  ngOnInit() {
  }
}

