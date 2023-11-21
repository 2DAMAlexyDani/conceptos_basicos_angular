import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonPopover } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { Personaje } from 'src/app/core/Interfaces/personaje';
import { PersonajesService } from 'src/app/core/services/personajes.service';

export const PERSONAJE_SELECTABLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ArenaSelectableComponent),
  multi: true,
};

@Component({
  selector: 'app-arena-selectable',
  templateUrl: './arena-selectable.component.html',
  styleUrls: ['./arena-selectable.component.scss'],
  providers: [PERSONAJE_SELECTABLE_VALUE_ACCESSOR],
})
export class ArenaSelectableComponent implements OnInit, ControlValueAccessor {
  personajeSelected: Personaje | undefined;
  disabled: boolean = false;
  personajes: Personaje[] = [];

  propagateChange = (obj: any) => {};

  constructor(public personajesService: PersonajesService) {}

  async onLoadPersonaje() {
    this.personajes = await lastValueFrom(
      this.personajesService.getAllPerson()
    );
  }

  private async selectPersonaje(
    id: number | undefined,
    propagate: boolean = false
  ) {
    if (id) {
      this.personajeSelected = await lastValueFrom(
        this.personajesService.getPerson(id)
      );
    } else {
      this.personajeSelected = undefined;
    }
    if (propagate && this.personajeSelected) {
      console.log(this.personajeSelected);
      this.propagateChange(this.personajeSelected.id);
    }
  }

  writeValue(obj: any): void {
    this.selectPersonaje(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  ngOnInit() {}

  onCardClicked(popover: IonPopover, personaje: Personaje) {
    this.selectPersonaje(personaje.id, true);
    popover.dismiss();
  }

  deselect(popover: IonPopover | null = null) {
    this.selectPersonaje(undefined, true);
    if (popover) {
      popover.dismiss();
    }
  }
}
