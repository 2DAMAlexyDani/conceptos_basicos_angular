import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { CharacterPageRoutingModule } from './characters-routing.module';
import { characters } from './characters.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule
  ],
  declarations: [characters]
})
export class CharactersPageModule {}
