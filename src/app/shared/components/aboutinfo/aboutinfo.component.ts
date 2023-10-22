import { Component, Input, OnInit } from "@angular/core";
import { Personaje } from "../../Interfaces/personaje";

@Component({
  selector: 'app-aboutinfo',
  templateUrl: './aboutinfo.component.html',
  styleUrls: ['./aboutinfo.component.scss'],
})

export class AboutinfoComponent  implements OnInit {
  
  @Input() person:Personaje={
    id:0,
    name:"",
    surname:"",
    esAutor:true
}
  constructor() { }

  ngOnInit() {}

}
