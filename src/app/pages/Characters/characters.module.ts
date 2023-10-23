import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './characters-routing.module';

import { characters } from './characters.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WelcomePageRoutingModule],
  declarations: [characters],
})
export class CharacterPageModule {}
