import { query } from '@angular/animations';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput, IonPopover } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { Arena } from 'src/app/core/Interfaces/arenas';
import { ArenasService } from 'src/app/core/services/arenas.service';

export const ARENA_SELECTABLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonajeSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-personaje-selectable',
  templateUrl: './personaje-selectable.component.html',
  styleUrls: ['./personaje-selectable.component.scss'],
  providers:[ARENA_SELECTABLE_VALUE_ACCESSOR]
})
export class PersonajeSelectableComponent  implements OnInit, ControlValueAccessor {

  arenaSelected:Arena | undefined;
  disabled:boolean = false;
  arenas: Arena[] = [];

  propagateChange = (obj: any) => {}

  constructor(
    public arenasService:ArenasService
  ) { }

  async onLoadArena(){
    this.arenas = await lastValueFrom(this.arenasService.getAllArenas());
  }

  private async selectArena(id:number | undefined, propagate:boolean = false){
    if(id){
      this.arenaSelected = await lastValueFrom(this.arenasService.getArena(id));
    } else {
      this.arenaSelected = undefined;
    }
    if(propagate && this.arenaSelected){
      console.log(this.arenaSelected);
      this.propagateChange(this.arenaSelected.id);
    }
  }

  writeValue(obj: any): void {
      this.selectArena(obj);
  }

  registerOnChange(fn: any): void {
      this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  ngOnInit() {}

  onCardClicked(popover:IonPopover, arena:Arena){
    this.selectArena(arena.id, true);
    popover.dismiss();
  }

  deselect(popover:IonPopover|null=null){
    this.selectArena(undefined, true);
    if(popover){
      popover.dismiss();
    }
  }
}
