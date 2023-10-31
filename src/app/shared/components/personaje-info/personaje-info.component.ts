import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../../core/Interfaces/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-info',
  templateUrl: './personaje-info.component.html',
  styleUrls: ['./personaje-info.component.scss'],
})
export class PersonajeInfoComponent  implements OnInit {

  @Input() person!:Personaje;
  @Output() onCardClicked:EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  onCardClick(){
    this.onCardClicked.emit();
  }
}
