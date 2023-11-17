import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Arena } from 'src/app/core/Interfaces/arenas';

@Component({
  selector: 'app-personaje-item',
  templateUrl: './personaje-item.component.html',
  styleUrls: ['./personaje-item.component.scss'],
})
export class PersonajeItemComponent  implements OnInit {

  private _arena:Arena|undefined;
  
  @Input('arena') set arena(_arena:Arena|undefined){
    this._arena = _arena;
  }
  @Output('clicked') clicked = new EventEmitter();

  get arena():Arena|undefined{
    return this._arena;
  }

  constructor() { }

  ngOnInit() {}

  onCardClicked(){
    this.clicked.emit(this._arena);
  }
}
