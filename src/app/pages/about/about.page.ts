import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoresService } from 'src/app/core/services/autores.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private router:Router,
    public persService:AutoresService
  ) {}

  ngOnInit() {
    this.persService.getAllPerson().subscribe();
  }
}
