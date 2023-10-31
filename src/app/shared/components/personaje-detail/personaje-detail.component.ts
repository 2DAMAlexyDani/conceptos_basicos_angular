import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Personaje } from 'src/app/core/Interfaces/personaje';

@Component({
  selector: 'app-personaje-detail',
  templateUrl: './personaje-detail.component.html',
  styleUrls: ['./personaje-detail.component.scss'],
})
export class PersonajeDetailComponent implements OnInit {
  @Input() pers:Personaje | null=null;

  constructor(
    private _modal:ModalController
  ){}

  ngOnInit() {}

  onCancel(){
    this._modal.dismiss(null, 'cancel');
  }
}