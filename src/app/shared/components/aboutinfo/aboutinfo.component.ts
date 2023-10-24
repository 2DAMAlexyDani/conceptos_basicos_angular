import { Component, Input, OnInit } from "@angular/core";
import { Personaje } from "../../../core/Interfaces/personaje";

@Component({
  selector: 'app-aboutinfo',
  templateUrl: './aboutinfo.component.html',
  styleUrls: ['./aboutinfo.component.scss'],
})

export class AboutinfoComponent  implements OnInit {
  
  @Input() person!:Personaje;

  constructor() { }

  ngOnInit() {
  }

}
