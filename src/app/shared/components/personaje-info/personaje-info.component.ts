import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';

@Component({
  selector: 'app-personaje-info',
  templateUrl: './personaje-info.component.html',
  styleUrls: ['./personaje-info.component.scss'],
})
export class PersonajeInfoComponent  implements OnInit {
  @Input() person!: Personaje;
  constructor() { }
  ngOnInit(): void {}

}
