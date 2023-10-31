import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './characters-routing.module';
import { characters } from './characters.page';
import { PersonajeInfoComponent } from 'src/app/shared/components/personaje-info/personaje-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CharacterPageRoutingModule,SharedModule],
  declarations: [characters],
})
export class CharacterPageModule {}
