import { Component, Input, OnInit } from "@angular/core";
import { personaje } from "../../Interfaces/personaje";

@Component({
  selector: 'app-aboutinfo',
  templateUrl: './aboutinfo.component.html',
  styleUrls: ['./aboutinfo.component.scss'],
})

export class AboutinfoComponent  implements OnInit {
  
  @Input() person:personaje={
    name:"",
    surname:""
}
  constructor() { }

  ngOnInit() {}

}
