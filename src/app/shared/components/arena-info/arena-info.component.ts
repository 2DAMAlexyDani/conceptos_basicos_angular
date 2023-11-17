import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Arena } from 'src/app/core/Interfaces/arenas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arena-info',
  templateUrl: './arena-info.component.html',
  styleUrls: ['./arena-info.component.scss'],
})
export class ArenaInfoComponent  implements OnInit {
  
  @Input() arena!:Arena;
  @Output() onCardClicked:EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  onCardClick(){
    this.onCardClicked.emit();
  }
}
