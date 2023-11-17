import { Component, Input, OnInit } from "@angular/core";
import { Autor } from "../../../core/Interfaces/autores";

@Component({
  selector: 'app-aboutinfo',
  templateUrl: './aboutinfo.component.html',
  styleUrls: ['./aboutinfo.component.scss'],
})

export class AboutinfoComponent  implements OnInit {
  
  @Input() person!:Autor;

  constructor() { }

  ngOnInit() {
  }

}
