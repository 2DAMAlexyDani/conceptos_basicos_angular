import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/core/Interfaces/personaje';

@Component({
  selector: 'app-arena-item',
  templateUrl: './arena-item.component.html',
  styleUrls: ['./arena-item.component.scss'],
})
export class ArenaItemComponent  implements OnInit {

  private _personaje:Personaje|undefined;
  
  @Input('personaje') set personaje(_personaje:Personaje|undefined){
    this._personaje = _personaje;
  }
  @Output('clicked') clicked = new EventEmitter();

  get personaje():Personaje|undefined{
    return this._personaje;
  }

  constructor() { }

  ngOnInit() {}

  onCardClicked(){
    this.clicked.emit(this._personaje);
  }
}
