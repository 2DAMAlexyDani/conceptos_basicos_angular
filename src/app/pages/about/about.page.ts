import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutInfoComponent } from 'src/app/shared/components/about-info/about-info.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    router:Router,
    about:AboutInfoComponent
  ) { }

  ngOnInit() {
  }

}
