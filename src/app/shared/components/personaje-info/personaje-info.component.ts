<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../../core/Interfaces/personaje';
import { Router } from '@angular/router';
>>>>>>> a416da3cb5f938afe25b96e8d4d2a8b0450a4280

@Component({
  selector: 'app-personaje-info',
  templateUrl: './personaje-info.component.html',
  styleUrls: ['./personaje-info.component.scss'],
})
export class PersonajeInfoComponent  implements OnInit {
<<<<<<< HEAD
  @Input() person!: Personaje;
  constructor() { }
  ngOnInit(): void {}

=======

  @Input() person!:Personaje;
  @Output() onCardClicked:EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  onCardClick(){
    this.onCardClicked.emit();
  }
>>>>>>> a416da3cb5f938afe25b96e8d4d2a8b0450a4280
}
